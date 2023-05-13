import { useReducer } from 'react';
import {
	SET_RECEIVED_MESSAGES,
	SET_SENT_MESSAGES,
	SET_DISPLAYED_MESSAGES,
	SET_OPENED_MESSAGE,
} from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_RECEIVED_MESSAGES':
			return { ...state, allReceivedMessages: [...action.allReceivedMessages] };
		case 'SET_SENT_MESSAGES':
			return { ...state, allSentMessages: [...action.allSentMessages] };
		case 'SET_DISPLAYED_MESSAGES':
			return {
				...state,
				displayedMessagePreviews: [...action.displayedMessagePreviews],
			};
		case 'SET_OPENED_MESSAGE':
			return { ...state, openedMessage: action.openedMessage };
		default:
			return state;
	}
};

export function useMessageReducer(initialState) {
	return useReducer(reducer, initialState);
}
