const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		genderInterest: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			maxlength: 500,
		},
		saidYesTo: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		messages: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Message',
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

userSchema.virtual('matchCount').get(() => {
	return this.saidYesTo.length;
});

const User = model('User', userSchema);

module.exports = User;
