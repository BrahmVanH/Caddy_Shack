import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

import { CREATE_MESSAGE } from "../utils/mutations";
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

  const [allMessages, setAllMessages] = useState([{}]);

  const [allSentMessages, setAllSentMessages] = useState([{}]);


  const { loading, data } = useQuery(GET_RECEIVED_MESSAGES, {
    variables: { userId: userId }
  });

  console.log(data);

  const { sentData } = useQuery(GET_SENT_MESSAGES, {
    variables: { userId: userId}
  });

  useEffect(() => {
   if (data && data.allReceivedMessages) {
    setAllMessages(data.allReceivedMessages);
   };
  }, [data]);

  useEffect(() => {
    if (sentData && sentData.allSentMessages) {
      setAllSentMessages(data.allSentMessages);
    };
  }, [sentData]);

  const handleMessageOpen = (event) => {
    event.preventDefault();

    const selectedMessage = event.target;

    setOpenedMessage({
      
    })
  }

  
  return (
    
    <div>
      <div className='p-5 d-flex justify-content-between'>
        <div className='col-4 inbox'>
        {Auth.loggedIn() ? (
          <div className='all-messages'>
            <h4>Inbox</h4>
              {allMessages.map((message) => (
                <button className='message-preview' onClick={handleMessageOpen}>
                <div className='row'>
                  <div className="col-5">
                <p>{message.messageSenderName}</p>
                </div>
                  <div className="col-3 date-stamp">
                  <p>{message.createdAt}</p>
                  </div>
                </div>
                <div className="bio d-flex">
                <p>{message.messageBody}</p>
                </div>
                </button>
                ))}
          </div>
            ) : (
              <div>you must be signed in to view your messages!</div>
            )}
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
  
  // const handlePreviewClick = async (event) => {
  //   event.preventDefault();
    
  //   const selectedMessage = event.target.message;
    
  //   return selectedMessage;
  //   // query to get individual message
  // }
  
  // useEffect(() => {
  //   setOpenedMessage(handlePreviewClick)
  // }, [handlePreviewClick]);


  // const [messageBody, setMessageBody] = useState({
  //   messageBody: ''
  // });

  // const [messageSenderId, setMessageSenderId] = useState({ 
  //   messageSederId: '' });
  // const [messageRecipientId, setMessageRecipientId] = useState({ 
  //   messageRecipientId: '' });

  // useEffect(() => {
  //   setMessageSenderId(getUser.user._id);
  // }, [getUser]);

  // const handleInputChange = (event) => {
	// 	const { name, value } = event.target;
	// 	setMessageBody({ messageBody, [name]: value });
	// };

  // const [getUser] = useQuery(GET_ME, {
  //   variables: { userId: Auth.getProfile().data._id },
  // });

  
  // const [createMessage] = useMutation(CREATE_MESSAGE);

  // const handleMessageSend = async (event) => {
  //   event.preventDefault();

  //   	const form = event.currentTarget;
	// 	if (form.checkValidity() === false) {
	// 		event.preventDefault();
	// 		event.stopPropagation();
	// 	}

  //   const { data } = userQuery(GET_ME, {
  //     variables: { userId: Auth.getProfile().data._id },
  //   });

  //   const userId = data?.user._id

  //   try {
  //     const { data } = await createMessage({
  //       variables: {
  //         messageSenderId: userId,
  //         messageRecipientId: likedUserId,
  //         messageBody: messageBody
  //       },
  //     });
  //   } catch (err) {
  //     console.error(err);
	// 		setShowAlert(true);
  //   }
  // }

  // const createMessageBodyPreview = (messageBody) => {
  //   const bodyPreview = messageBody.slice(0,16).concat('...');

  //   return bodyPreview;

  



  );

  //Need to add a way to import likedUsers
  // Click on liked users to send message 
  // 

  // return (
  //   <div>
  //     <div className="chatbox">
  //       <div className="chats">
          
  //       </div>
  //     </div>

  //     <div className="myContainer">
  //       <div className="input-group mb-3 textArea">
  //         <input
  //           type="text"
  //           className="form-control text-input"
  //           placeholder="Your Message Here"
  //           aria-label="Recipient's username"
  //           aria-describedby="button-addon2"
  //         />
  //         <button
  //           className="btn btn-secondary btn-outline-secondary myBtn"
  //           type="button"
  //           id="button-addon2"
  //         >
  //           Send
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Message;


