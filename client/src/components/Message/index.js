import React, { useEffect, useState } from 'react';
import { useMessageContext } from '../../utils/MessageContext';
import {
	SET_RECEIVED_MESSAGES,
	SET_SENT_MESSAGES,
	SET_OPENED_MESSAGE,
	SET_DISPLAYED_MESSAGES,
	SET_USER_ID,
} from '../../utils/actions';
import { useQuery } from '@apollo/client';
import MessagePreview from './MessagePreview';

import { GET_RECEIVED_MESSAGES, GET_SENT_MESSAGES } from '../../utils/queries';

import Auth from '../../utils/auth';

import '../../assets/css/message.css';

function Message() {
	const [state, dispatch] = useMessageContext();

	const {
		userId,
		allReceivedMessages,
		allSentMessages,
		displayedMessagePreviews,
		openedMessage,
	} = state;

	const receivedMessages = useQuery(GET_RECEIVED_MESSAGES, {
		variables: { userId: userId },
	});

	console.log(receivedMessages.data);

	const sentMessages = useQuery(GET_SENT_MESSAGES, {
		variables: { userId: userId },
	});

	console.log(sentMessages.data);

	useEffect(() => {
		if (Auth.getProfile().data._id) {
			dispatch({
				type: SET_USER_ID,
				userId: Auth.getProfile().data._id,
			});
		}
	}, [dispatch]);

	useEffect(() => {
		if (receivedMessages.data) {
			dispatch({
				type: SET_DISPLAYED_MESSAGES,
				displayedMessagePreviews: receivedMessages.data.allReceivedMessages,
			});
		} else if (!receivedMessages.loading) {
			// If loading stops and there is no new data, update the state with the current state
			dispatch({
				type: SET_DISPLAYED_MESSAGES,
				displayedMessagePreviews: state.allReceivedMessages,
			});
		}
	}, [receivedMessages.data, receivedMessages.loading, allReceivedMessages]);

	const renderReceivedMessages = async (event) => {
		event.preventDefault();
		if (receivedMessages.data) {
			dispatch({
				type: SET_DISPLAYED_MESSAGES,
				displayedMessagePreviews: receivedMessages.data.allReceivedMessages,
			});
		} else if (!receivedMessages.loading) {
			// If loading stops and there is no new data, update the state with the current state
			dispatch({
				type: SET_DISPLAYED_MESSAGES,
				displayedMessagePreviews: state.allReceivedMessages,
			});
		}
	};

	const renderSentMessages = async (event) => {
		event.preventDefault();

		if (sentMessages.data) {
			dispatch({
				type: SET_DISPLAYED_MESSAGES,
				displayedMessagePreviews: sentMessages.data.allSentMessages,
			});
		} else if (!sentMessages.loading) {
			dispatch({
				type: SET_DISPLAYED_MESSAGES,
				displayedMessagePreviews: state.allSentMessages,
			});
		}
	};

	return (
		<div>
			<div className='p-5 message-dashboard'>
				<div className='col-4 inbox'>
					<div className='all-messages'>
						<div class='inbox-nav' role='group'>
							<button
								className='message-box-btn'
								type='button'
								onClick={renderReceivedMessages}>
								Inbox
							</button>
							<button
								className='message-box-btn'
								type='button'
								onClick={renderSentMessages}>
								Sent
							</button>
						</div>
						{Auth.loggedIn() ? (
							<div className='preview-container'>
								{displayedMessagePreviews.map((message) => (
									<MessagePreview
										key={message._id}
										_id={message._id}
										messageSenderName={message.messageSenderName}
										messageBody={message.messageBody}
										createdAt={message.createdAt}
									/>
								))}
							</div>
						) : (
							<div>you must be signed in to view your messages!</div>
						)}
						<div className='inbox-footer'></div>
					</div>
				</div>
				<div className='col-7 opened-message'>
					<div>
						{}
						<div className='viewed-message p-3 m-2'>
							<div className='name-container'>
								<h4>{openedMessage.messageSenderName}</h4>
							</div>
							<div className='message-body'>
								<p style={{ fontHeight: '2rem' }}>
									{openedMessage.messageBody}
								</p>
							</div>
							<div className='col-2 date-stamp'>
								<p>{openedMessage.createdAt}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Message;
