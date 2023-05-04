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


`;

// To-do: Add queries, add mutation