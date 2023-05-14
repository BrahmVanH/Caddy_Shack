import React, { createContext, useContext } from 'react';
import { useMessageReducer } from './reducers';

const MessageContext = createContext();
const { Provider } = MessageContext;

const MessageProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useMessageReducer({
		userId: '',
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

export { MessageProvider, useMessageContext };
