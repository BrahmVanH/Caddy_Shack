import React, { useEffect, useState } from "react";
import { useMessageContext } from "../../../utils/messageContext";
import { SET_RECEIVED_MESSAGES, SET_SENT_MESSAGES, SET_OPENED_MESSAGE, SET_DISPLAYED_MESSAGES } from "../../../utils/actions";
import { useQuery } from "@apollo/client";

import { GET_RECEIVED_MESSAGES, GET_SENT_MESSAGES } from '../../../utils/queries';

import Auth from '../../../utils/auth';

import "./assets/css/message.css";
// comment to push

function Message() {

  // const userId = Auth.getProfile().data._id;

  // const [openedMessage, setOpenedMessage] = useState({
  //   messageSenderId: '',
  //   messageSenderName: '',
  //   messageRecipientId: '',
  //   messageRecipientName: '',
  //   messageBody: '',
  //   createdAt: '',
  // })
  const [state, dispatch] = useMessageContext();

  const { userId, allReceivedMessages, allSentMessages, displayedMessagePreviews, openedMessage } = state;
  // const [allReceivedMessages, setAllReceivedMessages] = useState([]);

  // const [allSentMessages, setAllSentMessages] = useState([]);

  // const [displayedMessagePreviews, setDisplayedMessagePreviews] = useState([]);


  const receivedMessages = useQuery(GET_RECEIVED_MESSAGES, {
    variables: { userId: userId }
  });

  console.log(receivedData);

  const sentMessages = useQuery(GET_SENT_MESSAGES, {
    variables: { userId: userId }
  });

  console.log(sentMessages.data);

  useEffect(() => {
   if (receivedMessages.data) {
      dispatch({
        type: SET_RECEIVED_MESSAGES,
        allReceivedMessages: receivedMessages.data.allReceivedMessages,
      });

  } else if (!receivedMessages.loading) {
    // If loading stops and there is no new data, update the state with the current state
    dispatch({
      type: SET_RECEIVED_MESSAGES,
      allReceivedMessages: allReceivedMessages,
    })
  }
  }, [receivedMessages.data, receivedMessages.loading, receivedMessages.dispatch]);

  useEffect(() => {
    if (sentMessages.data) {
      dispatch({
        type: SET_SENT_MESSAGES,
        allSentMessages: sentMessages.data.allSentMessages,
      })
    } else if (!sentMessages.loading) {
      dispatch({
        type: SET_SENT_MESSAGES,
        allSentMessages: allSentMessages,
      })
    }
  }, [sentMessages.data, sentMessages.loading, sentMessages.dispatch]);

  // const handleMessageOpen = async (message) => {

  //   setOpenedMessage(message);
  // }

  const openInbox = async (event) => {
    event.preventDefault();

    setDisplayedMessagePreviews(allReceivedMessages);
  }

  const openSentMail = async (event) => {
    event.preventDefault();

    setDisplayedMessagePreviews(allSentMessages);
  }

  
  return (
    
    <div>
      <div className='p-5 message-dashboard'>
        <div className='col-4 inbox'>
          <div className='all-messages'>
              <div class="inbox-nav" role="group">
                <button className="message-box-btn" 
                type="button"
                onClick={openInbox}
                >
                  Inbox
                </button>
                <button className="message-box-btn"
                type="button"
                onClick={openSentMail}
                >
                  Sent 
                </button>
                </div>
                {Auth.loggedIn() ? (
             
            <div className="preview-container" >
                {displayedMessagePreviews.map((message) => (
                  <button className='message-preview' onClick={setOpenedMessage(message)}>
                  <div className='row'>
                    <div className="col-5">
                  ```<span id='messageSenderName'>{message.messageSenderName}</span>
                  ``</div>
                    <div className="col-3 date-stamp">
                    `<p>{message.createdAt}</p>
                    </div>
                  </div>
                  <div className="bio d-flex">
                  `<p id='messageBody'>{message.messageBody}</p>
                  </div>
                  </button>
                ))}
                </div>
            ) : (
              <div>you must be signed in to view your messages!</div>
            )}
       <div className="inbox-footer"></div>
          </div>
       </div>
       <div className="col-7 opened-message">
        <div>
          <div className="viewed-message">
             <h4>{openedMessage.messageSenderName}</h4>
                <p>{openedMessage.messageBody}</p>
                <div className="col-2 date-stamp">
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


