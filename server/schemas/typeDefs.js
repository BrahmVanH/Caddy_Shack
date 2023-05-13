const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID!
		firstName: String
		lastName: String
		username: String!
		password: String!
		age: Int
		gender: String
		genderInterest: String
		bio: String
		iLike: [User]
		likeMe: [User]
		messages: [Message]
	}

	input UserInput {
		_id: ID!
		firstName: String!
		lastName: String!
		username: String!
		password: String!
		age: Int!
		gender: String!
		genderInterest: String!
		bio: String!
	}

	type Message {
		_id: ID!
		messageSenderId: ID!
		messageSenderName: String!
		messageRecipientId: ID!
		messageRecipientName: String!
		messageBody: String!
		createdAt: String!
	}

	input MessageInput {
		messageSenderId: ID!
		messageSenderName: String!
		messageRecipientId: ID!
		messageRecipientName: String!
		messageBody: String!
		createdAt: String!
	}

	type MatchId {
		matchId: ID
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		getUser(userId: ID!): User
		allUsers: [User]
		allMen: [User]!
		allWomen: [User]!
		allMatches(userId: ID!): [User]!
		allReceivedMessages(userId: ID!): [Message]!
		allSentMessages(userId: ID!): [Message]!
		getAllMessagesByAllUsers: [Message]!
	}

	type Mutation {
		likeUser(userId: ID!, likedUserId: ID!): User
		removeLikedUser(UserId: ID!, likedUserId: ID!): User
		createUser(
			firstName: String!
			lastName: String!
			username: String!
			password: String!
			age: Int!
			gender: String!
			genderInterest: String!
			bio: String!
		): Auth
		loginUser(username: String!, password: String!): Auth
		deleteUser(userId: ID!, password: String!): Auth
		sendMessage(
			messageSenderId: ID!
			messageSenderName: String!
			messageRecipientId: ID!
			messageRecipientName: String!
			messageBody: String!
		): Message
		deleteMessage(userId: ID!, messageId: ID!): Message
	}
`;

// To-do: Add queries, add mutation

module.exports = typeDefs;
