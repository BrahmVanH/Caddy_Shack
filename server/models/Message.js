const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema(
	{
		messageSenderId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		messageRecipientId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		messageBody: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const Message = model('Message', messageSchema);

module.exports = Message;
