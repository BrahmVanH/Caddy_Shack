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
		saidYesTo: [userSchema],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);
