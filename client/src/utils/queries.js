import { gql } from '@apollo/client';

export const GET_ME = gql`
	query getUser($userId: ID!) {
		getUser(userId: $userId) {
			_id
			username
			email
			savedBooks {
				bookId
				authors
				image
				description
				title
				link
			}
			bookCount
		}
	}
`;

export const ALL_USERS = gql`
	query allUsers {
		allUsers {
			firstName
			lastName
			age
			gender
			bio
			genderInterest
			messages {
				_id
				createdAt
				messageBody
				messageRecipient
				messageSender
			}
		}
	}
`;

export const ALL_MEN = gql`
	query allMen {
		allMen {
			_id
			age
			bio
			firstName
			gender
			genderInterest
			lastName
			messages {
				_id
				createdAt
				messageBody
				messageRecipient
				messageSender
			}
		}
	}
`;

export const ALL_WOMEN = gql`
	query allWomen {
		allWomen {
			_id
			age
			bio
			firstName
			gender
			genderInterest
			lastName
			messages {
				_id
				createdAt
				messageBody
				messageRecipient
				messageSender
			}
		}
	}
`;
