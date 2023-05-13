import React, { useEffect, useState } from "react";
import { useMessageContext } from "../../../utils/messageContext";
import { SET_RECEIVED_MESSAGES, SET_SENT_MESSAGES, SET_OPENED_MESSAGE, SET_DISPLAYED_MESSAGES } from "../../../utils/actions";
import { useQuery } from "@apollo/client";







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