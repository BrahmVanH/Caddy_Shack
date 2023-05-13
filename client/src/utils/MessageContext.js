import React, { createContext, useReducer } from 'react';
import Auth from '../utils/auth';

const MessageContext = createContext();
const { Provider } = MessageContext;

const messageProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useMessageReducer({
		userId: Auth.getProfile().data._id,
		allReceivedMessages: [],
		allSentMessages: [],
		displayedMessagePreviews: [],
		openedMessage: {
			messageSenderId: '',
			messageSenderName: '',
			messageRecipientId: '',
			messageRecipientName: '',
			messageBody: '',
			createdAt: '',
		},
	});
	return <Provider value={[state, dispatch]} {...props} />;
};

const useMessageContext = () => {
	return useContext(MessageContext);
};

export { messageProvider, useMessageContext };
