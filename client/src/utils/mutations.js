import { gql } from '@apollo/client';

export const CREATE_USER = gql`
	mutation createUser(
		$firstName: String!
		$lastName: String!
		$username: String!
		$password: String!
		$age: Int!
		$gender: String!
		$genderInterest: String!
		$bio: String!
	) {
		createUser(
			firstName: $firstName
			lastName: $lastName
			username: $username
			password: $password
			age: $age
			gender: $gender
			genderInterest: $genderInterest
			bio: $bio
		) {
			token
			user {
				_id
				firstName
				lastName
				username
				age
				gender
				genderInterest
				bio
			}
		}
	}
`;

export const LOGIN_USER = gql`
	mutation loginUser($username: String!, $password: String!) {
		loginUser(username: $username, password: $password) {
			token
			user {
				_id
				username
				iLike {
					_id
				}
			}
		}
	}
`;

export const DELETE_USER = gql`
	mutation deleteUser($userId: ID!, $password: String!) {
		deleteUser(userId: $userId, password: $password) {
			_id
			password
		}
	}
`;

export const ADD_LIKED_USER = gql`
	mutation likeUser($userId: ID!, $likedUserId: ID!) {
		addLikedUser(userId: $userId, likedUserId: $likedUserId) {
			_id
		}
	}
`;

export const REMOVE_LIKED_USER = gql`
	mutation removeLikedUser($userId: ID!, $likedUserId: ID!) {
		removeLikedUser(userId: $userId, likedUserId: $likedUserId) {
			_id
		}
	}
`;

export const SEND_MESSAGE = gql`
	mutation sendMessage($messageSenderId: ID!, $messageRecipientId: ID!, $messageBody: String!) {
		sendMessage(messageSenderId: $messageSenderId, messageRecipientId: $messageRecipientId, messageBody: $messageBody) {
			_id
			messageSenderId
			messageRecipientId
			createdAt
		}
	}
`
