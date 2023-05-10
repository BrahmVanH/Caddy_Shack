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
		likedUsers: [User]
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
		messageSender: String!
		messageRecipient: String!
		messageBody: String!
		createdAt: String!
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		# user(username: String!): User
		# allFemaleUsers
		allUsers: [User]
		allMen: [User]!
		allWomen: [User]!
		allMatches: [User]!
	}

	type Mutation {
		addLikedUser(userId: ID!, likedUserId: ID!): User
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
	}
`;

// To-do: Add queries, add mutation

module.exports = typeDefs;
