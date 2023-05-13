import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";

import { GET_RECEIVED_MESSAGES, GET_SENT_MESSAGES } from '../utils/queries';

import Auth from '../utils/auth';

import "./assets/css/message.css";

function Message() {

  const userId = Auth.getProfile().data._id;

  const [openedMessage, setOpenedMessage] = useState({
    messageSenderId: '',
    messageSenderName: '',
    messageRecipientId: '',
    messageRecipientName: '',
    messageBody: '',
    createdAt: '',
  })

  const [allReceivedMessages, setAllReceivedMessages] = useState([]);

  const [allSentMessages, setAllSentMessages] = useState([]);

  const [displayedMessagePreviews, setDisplayedMessagePreviews] = useState([]);


  const { loading, data: receivedData } = useQuery(GET_RECEIVED_MESSAGES, {
    variables: { userId: userId }
  });

  console.log(receivedData);

  const { data: sentData } = useQuery(GET_SENT_MESSAGES, {
    variables: { userId: userId }
  });

  console.log(sentData);

  useEffect(() => {
   if (receivedData) {
    setAllReceivedMessages(receivedData.allReceivedMessages);
   };
  }, [receivedData]);

  useEffect(() => {
    if (sentData) {
      setAllSentMessages(sentData.allSentMessages);
    };
  }, [sentData]);

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


