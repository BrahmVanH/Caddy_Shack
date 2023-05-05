const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
	{
		messageSender: {
			type: String,
			required: true,
		},
		messageRecipient: {
			type: String,
			required: true,
		},
		messageBody: {
			type: String,
			required: true,
		},
		createdAt: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);


