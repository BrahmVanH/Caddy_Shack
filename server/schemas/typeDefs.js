const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID!
		first_name: String!
		last_name: String!
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
		first_name: String!
		last_name: String!
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


`;

// To-do: Add queries, add mutation