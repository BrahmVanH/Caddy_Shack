const db = require('../config/connection');
const { User, Message } = require('../models');
const messageSeeds = require('./messageSeed.json');

db.once('open', async () => {
	await Message.deleteMany({});

	const users = await User.find();


	const getRandomSenderId = (users) => {
		randomIndex = Math.floor(Math.random() * users.length);
		randomSender = users[randomIndex]._id;
		return randomSender;
	};

	const getRandomReceiverId = (users) => {
		randomIndex = Math.floor(Math.random() * users.length);
		randomReceiverId = users[randomIndex]._id;
		return randomReceiverId;
	};
	const createSeedMessages = async (messageBody) => {
		console.log('creatings seed message...');

		const randomSenderId = getRandomSenderId(users);

		console.log(randomSenderId);

		const randomReceiverId = getRandomReceiverId(users);
		console.log(randomReceiverId);

		const message = await Message.create({
			messageSenderId: randomSenderId,
			messageRecipientId: randomReceiverId,
			messageBody: messageBody,
		});

		console.log(message);
		const sender = await User.findOneAndUpdate(
			{ _id: randomSenderId },
			{ $addToSet: { messages: message._id } },
			{
				new: true,
				runValidators: true,
			}
		);

		if (!sender) {
			throw new Error('no user found with that ID, try again');
		}
		const recipient = await User.findOneAndUpdate(
			{ _id: randomRecipientId },
			{ $addToSet: { messages: message._id } },
			{
				new: true,
				runValidators: true,
			}
		);

		if (!recipient) {
			throw new Error('no user found with that ID, try again');
		}
	};

	try {

    for (let i = 0; i < 25; i++){ 
		const messageBody = messageSeeds[i].messageBody;
			console.log(`creating seed message with ${messageBody}`);
			createSeedMessages(messageBody);
		}
	} catch (err) {
		console.log('something went wrong while creatingSeedMessages');
		console.error(err);
	}
});
