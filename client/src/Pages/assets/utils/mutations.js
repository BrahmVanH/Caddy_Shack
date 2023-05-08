import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
      }
    }
  }
`;
export const LOGIN_USER = gql`
	mutation loginUser($username: String!, $password: String!) {
		loginUser(username: $username, password: $password) {
			user {
				_id
				email
				username
				firstName
				lastName
				genderInterest
				likedUsers {
					_id
				}
			}
		}
	}
`;

export const DELETE_USER = gql`
	mutation deleteUser($userId: ID!) {
		deleteUser(userId: $userId) {
			user {
				_id
				username
				email
			}
		}
	}
`;

export const ADD_LIKED_USER = gql`
	mutation addLikedUser($UserId: ID!, $likedUserID: ID!) {
		addLikedUser(userId: $userId, likedUserId: $likedUserId) {
			user {
				_id
				username
				firstName
				lastName
				genderInterest
				likedUsers {
					_id
				}
			}
		}
	}
`;
export const REMOVE_LIKED_USER = gql`
	mutation removeLikedUser($userId: ID!, $likedUserId: ID!) {
		removeLikedUser(userId: $userId, likedUserId: $likedUserId) {
			user {
				_id
				username
				firstName
				lastName
				genderInterest
				likedUsers {
					_id
				}
			}
		}
	}
`;
