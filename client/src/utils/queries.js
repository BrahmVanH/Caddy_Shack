import { gql } from '@apollo/client';

export const GET_ME = gql`
	query getUser($userId: ID!) {
		getUser(userId: $userId) {
			_id
			firstName
			lastName
			username
			age
			gender
			bio
			genderInterest
			iLike
			likeMe
		}
		getMatches(gender: $genderInterest) {
			_id
			firstName
			lastName
			username
			age
			gender
			bio
    }
	}
`;

// 

export const ALL_USERS = gql`
	query allUsers {
		allUsers {
			firstName
			lastName
			username
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
			username
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
			username
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
