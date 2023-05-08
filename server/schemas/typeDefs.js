const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID!
		firstName: String!
		lastName: String!
		username: String!
		age: Int!
		gender: String!
		genderInterest: String!
		bio: String!
		saidYesTo: [User]
		messages: [Message]
	}

	input UserInput {
		_id: ID!
		firstName: String!
		lastName: String!
		username: String!
		age: Int!
		gender: String!
		genderInterest: String!
		bio: String!
	}

	type Message {
		_id: ID!
		messageSender: String!
		messageRecipient: String!
		messageBody: String!
		createdAt: String!
	}

	type Query {
		# user(username: String!): User
		# allFemaleUsers
		allUsers: [User]
		allMen: [User]!
		allWomen: [User]!
	}

	type Mutation {
		addLikedUser(userId: ID!, likedUserId: ID!): User
		removeLikedUser(UserId: ID!, likedUserId: ID!): User
		createUser(username: String!, email: String!, password: String!): User
		loginUser(username: String!, password: String!): User
	}
`;

// To-do: Add queries, add mutation

module.exports = typeDefs;
