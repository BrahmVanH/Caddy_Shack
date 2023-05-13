import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

import { CREATE_MESSAGE } from "../utils/mutations";
import { GET_RECEIVED_MESSAGES, GET_SENT_MESSAGES } from '../utils/queries';

import Auth from '../utils/auth';

import "./assets/css/message.css";

function Message() {

  const [openedMessage, setOpenedMessage] = useState({
    messageSender: '',
    messageRecipient: '',
    messageBody: '',
    createdAt: '',
  })

  const [allMessages, setAllMessages] = useState([{}]);

  const { loading, data } = useQuery(GET_RECEIVED_MESSAGES, {
    variables: { userId: Auth.getProfile().data._id }
  });

  useEffect(() => {
   if (data && data.allReceivedMessages) {
    setAllMessages(data.allReceivedMessages);
   };
  }, [data]);

  
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

  

  
  return (
    
    <div>
      <div className='container'>
        <div className='col-2 inbox'>
        {Auth.loggedIn() ? (
          <div className='allMessages'>
              {allMessages.map((message) => (
                // <button onClick={handlePreviewClick}>
                <div className='message-preview'>
                <h2>{message.sender}</h2>
                <p>{message.messageBody}</p>
                <p>{message.createdAt}</p>
                </div>
                // </button>
                ))}
          </div>
            ) : (
              <div>you must be signed in to view your messages!</div>
            )}
       </div>
      </div>
    </div>


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


