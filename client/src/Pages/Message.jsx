// import "./assets/css/message.css";
// import { CREATE_MESSAGE } from "../utils/mutations";
// import { GET_ME } from "../utils/queries";
// import { useMutation, useQuery } from "@apollo/client";
// import React, { useState } from "react";


// function Message() {



//   const [messageBody, setMessageBody] = useState({
//     messageBody: ''
//   });

//   const handleInputChange = (event) => {
// 		const { name, value } = event.target;
// 		setMessageBody({ messageBody, [name]: value });
// 	};

//   const [getUser] = useQuery(GET_ME);
//   const [createMessage] = useMutation(CREATE_MESSAGE);

//   const handleMessageSend = async (event) => {
//     event.preventDefault();

//     	const form = event.currentTarget;
// 		if (form.checkValidity() === false) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 		}

//     const { data } = userQuery(GET_ME, {
//       variables: { userId: Auth.getProfile().data._id },
//     });

//     const userId = data?.user._id

//     try {
//       const { data } = await createMessage({
//         variables: {
//           messageSenderId: userId,
//           messageRecipientId: likedUserId,
//           messageBody: messageBody
//         },
//       });
//     } catch (err) {
//       console.error(err);
// 			setShowAlert(true);
//     }
//   }


//   //Need to add a way to import likedUsers
//   // Click on liked users to send message 
//   // 

//   return (
//     <div>
//       <div className="chatbox">
//         <div className="chats">
          
//         </div>
//       </div>

//       <div className="myContainer">
//         <div className="input-group mb-3 textArea">
//           <input
//             type="text"
//             className="form-control text-input"
//             placeholder="Your Message Here"
//             aria-label="Recipient's username"
//             aria-describedby="button-addon2"
//           />
//           <button
//             className="btn btn-secondary btn-outline-secondary myBtn"
//             type="button"
//             id="button-addon2"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Message;
