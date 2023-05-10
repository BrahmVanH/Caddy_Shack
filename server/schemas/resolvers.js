const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		allUsers: async () => {
			const allUsers = await User.find({});
			console.log(allUsers);
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
		allMatches: async () => {
			const matches = await User.find({ saidYesTo: { $ne: [] } });
			if (!matches) {
				throw new Error('Sorry! You have no matches.');
			}
			return matches;
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
		loginUser: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('No user found with that email!');
			}

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) {
				throw new AuthenticationError('Incorrect password!');
			}

			const token = signToken(newUser);

			return { token, newUser };
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

		addLikedUser: async (parent, { userId, likedUserId }) => {
			const user = await User.findOneAndUpdate(
				{ _id: userId },
				{ $addToSet: { likedUsers: likedUserId } },
				{
					new: true,
					runValidators: true,
				}
			);
			if (!userId) {
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
	},
};

module.exports = resolvers;
