const { AuthenticationError } = require('apollo-server-express');
const { User, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		getUser: async (parent, { userId }) => {
			const foundUser = await User.findOne({ _id: userId });

			if (!foundUser) {
				throw new Error('Cannot find user with that ID!');
			}

			return foundUser;
		},

		allUsers: async () => {
			const allUsers = await User.find({});
			if (!allUsers) {
				throw new Error('Something went wrong');
			}

			return allUsers;
		},
		allMen: async () => {
			const users = await User.find({ gender: 'male' });
			if (!users) {
				throw new Error('Something went wrong');
			}
			return users;
		},
		allWomen: async () => {
			const users = await User.find({ gender: 'female' });
			if (!users) {
				throw new Error('Something went wrong');
			}
			return users;
		},
		allMatches: async (parent, { userId }) => {
			createMatches = async () => {
				const user = await User.findOne({ _id: userId });
				const iLikeIds = user.iLike.map((id) => id.toString());
				const likeMeIds = user.likeMe.map((id) => id.toString());

				return iLikeIds.filter((id) => likeMeIds.includes(id));
			};
			const matchIds = await createMatches();

			if (!matchIds) {
				throw new Error('Sorry, you have no matches.');
			}
			matchUserProfiles = [];

			for (const id of matchIds) {
				const user = await User.findOne({ _id: id });
				matchUserProfiles.push(user);
			}
			return matchUserProfiles;
		},
		allReceivedMessages: async (parent, { userId }) => {
			const messages = await Message.find({ messageRecipientId: userId });
			
			
			return messages;
		},
		allSentMessages: async (parent, { userId }) => {
			const messages = await Message.find({ messageSenderId: userId });
			
			return messages;
		},

		possibleMatches: async (parent, args) => {
			if (!args) {
				throw new AuthenticationError("No logged in user. You must be logged in.")
				
			} 
			const loggedInUser = await User.find({ _id: args.userId } );
			const matches = await User.find( {gender: loggedInUser.genderInterest} );
			console.log(matches)
			if (!matches) {
				throw new Error('Sorry! You have no matches.');
			}
			return matches;

		getAllMessagesByAllUsers: async () => {
			const messages = await Message.find();

			return messages;
		}

	},
},
	Mutation: {
		createUser: async (
			parent,
			{
				firstName,
				lastName,
				username,
				password,
				age,
				gender,
				genderInterest,
				bio,
			}
		) => {
			const newUser = await User.create({
				firstName,
				lastName,
				username,
				password,
				age,
				gender,
				genderInterest,
				bio,
			});

			const token = signToken(newUser);

			return { token, newUser };
		},
		loginUser: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new AuthenticationError('No user found with that email!');
			}

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) {
				throw new AuthenticationError('Incorrect password!');
			}

			const token = signToken(user);

			return { token, user };
		},
		deleteUser: async (parent, { userId, password }) => {
			const user = await User.findOne({ userId });

			if (!user) {
				throw new AuthenticationError('No user with that ID.');
			}

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) {
				throw new AuthenticationError('Incorrect password.');
			}

			const token = signToken(newUser);

			return { token, newUser };
		},

		likeUser: async (parent, { userId, likedUserId }) => {
			const user = await User.findOneAndUpdate(
				{ _id: userId },
				{ $addToSet: { iLike: likedUserId } },
				{
					new: true,
					runValidators: true,
				}
			);

			if (!user) {
				throw new Error(
					'Could not retrieve user-data, please refresh and try again.'
				);
			}

			const likedUser = await User.findOneAndUpdate(
				{ _id: likedUserId },
				{ $addToSet: { likeMe: userId } },
				{
					new: true,
					runValidators: true,
				}
			);

			if (!likedUser) {
				throw new Error(
					'Could not retrieve user-data, please refresh and try again.'
				);
			}
			return user;
		},

		removeLikedUser: async (parent, { userId, likedUserId }) => {
			const user = await User.findOneAndUpdate(
				{ _id: userId },
				{ $pull: { likedUsers: likedUserId } }
			);
			return user;
		},

		sendMessage: async (
			parent,
			{ messageSenderId, messageSenderName, messageRecipientId, messageRecipientName, messageBody }
		) => {
			const message = await Message.create({
				messageSenderId,
				messageSenderName,
				messageRecipientId,
				messageRecipientName,
				messageBody,
			});
			const sender = await User.findOneAndUpdate(
				{ _id: messageSenderId },
				{ $addToSet: { messages: message._id } },
				{
					new: true,
					runValidators: true,
				}
			);

			if (!sender) {
				throw new Error('no user found with that ID, try again');
			}
			const recipient = await User.findOneAndUpdate(
				{ _id: messageRecipientId },
				{ $addToSet: { messages: message._id } },
				{
					new: true,
					runValidators: true,
				}
			);

			if (!recipient) {
				throw new Error('no user found with that ID, try again');
			}

			return message;
		},

		deleteMessage: async (parent, { userId, messageId }) => {
			const user = await User.findOneAndUpdate(
				{ _id: userId },
				{ $pull: { messages: messageId } }
			);
			return message;
		},
	},
  
};

module.exports = resolvers;
