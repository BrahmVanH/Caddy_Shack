import React from 'react';
import { useMessageContext } from "../../utils/MessageContext";

import { SET_OPENED_MESSAGE } from '../../utils/actions';

function MessagePreview(message) {

  const [state, dispatch] = useMessageContext();

  const handleMessageOpen = async (event) => {
    event.preventDefault();
    if(message) {
      dispatch({
        type: SET_OPENED_MESSAGE,
        openedMessage: message
      })
    } else if (!message) {
      console.log('mssage is empty...');
      dispatch({
        type: SET_OPENED_MESSAGE,
        openedMessage: state.openedMessage
      })
    }

  }

  return (
    <button className='message-preview' onClick={handleMessageOpen}>
      <div className='row'>
        <div className="col-5">
        <span id='messageSenderName'>{message.messageSenderName}</span>
        </div>
        <div className="col-3 date-stamp">
          <p>{message.createdAt}</p>
        </div>
      </div>
      <div className="bio d-flex">
        <p id='messageBody'>{message.messageBody}</p>
      </div>
    </button>
  );
};

export default MessagePreview;
