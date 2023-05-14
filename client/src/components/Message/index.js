import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMessageContext } from '../../utils/MessageContext';
import {
	SET_RECEIVED_MESSAGES,
	SET_SENT_MESSAGES,
	SET_OPENED_MESSAGE,
	SET_DISPLAYED_MESSAGES,
	SET_USER_ID,
} from '../../utils/actions';
import { useQuery, useMutation } from '@apollo/client';
import MessagePreview from './MessagePreview';

import { GET_RECEIVED_MESSAGES, GET_SENT_MESSAGES } from '../../utils/queries';
import { SEND_MESSAGE } from '../../utils/mutations';

import Auth from '../../utils/auth';

import '../../assets/css/message.css';

function Message() {
	const [validated] = useState(false);
	
	const [showAlert, setShowAlert] = useState(false);
	
	const [sendMessage] = useMutation(SEND_MESSAGE)
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

	

	useEffect(() => {
		if (Auth.getProfile().data._id) {
			dispatch({
				type: SET_USER_ID,
				userId: Auth.getProfile().data._id,
			});
		}
	}, [dispatch]);

	const sentMessages = useQuery(GET_SENT_MESSAGES, {
		variables: { userId: userId },
	});



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

	const [responseMessageBody, setResponseMessageBody] = useState({
		messageBody: '',


	})
	
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setResponseMessageBody({ ...responseMessageBody, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (!responseMessageBody) {
			throw new Error('You must fill out message body to send a message!');
		}

		try {
			const { data } = await sendMessage({
				variables: {
					messageSenderId: state.openedMessage.messageRecipientId,
					messageSenderName: state.openedMessage.messageRecipientName, 
					messageRecipientId:  state.openedMessage.messageSenderId,
					messageRecipientName: state.openedMessage.messageSenderName,
					messageBody: responseMessageBody.messageBody,

				}
			})
		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}

		setResponseMessageBody({
			messageBody: ''
		});

	}

	useEffect(() => {
		setResponseMessageBody({
			messageBody: '',
		});
	}, [openedMessage]);

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
										messageSenderId={message.messageSenderId}
										messageRecipientId={message.messageRecipientId}
										messageRecipientName={message.messageRecipientName}
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
							{state.messageOpen ? (
								<Form className='form responseField'>
									<Alert
										dismissible
										onClose={() => setShowAlert(false)}
										show={showAlert}
										variant='danger'>
										You must enter a message before sending!
									</Alert>
									<Form.Group className='m-5'>
										<Form.Control
											type='textarea'
											placeholder='message'
											name='messageBody'
											onChange={handleInputChange}
											value={responseMessageBody.messageBody}
										/>

										<Form.Control.Feedback type='invalid'>
											Message is required!
										</Form.Control.Feedback>
									</Form.Group>
									<Button
										onClick={handleFormSubmit}
										className='btn d-block login-buttons'
										type='submit'>
										Send Message
									</Button>
								</Form>
							) : (
								<div></div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Message;
