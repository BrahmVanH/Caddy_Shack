const db = require('../config/connection');
const { User, Message } = require('../models');
const messageSeeds = require('./messageSeed.json');

db.once('open', async () => {
	await Message.deleteMany({});

	const users = await User.find();

	const getRandomSender = (users) => {
		randomIndex = Math.floor(Math.random() * users.length);
		randomSender = users[randomIndex];
		return randomSender;
	};

	const getRandomRecipient = (users) => {
		randomIndex = Math.floor(Math.random() * users.length);
		randomReceiver = users[randomIndex];
		return randomReceiver;
	};
	const createSeedMessages = async (messageBody) => {
		console.log('creating seed message...');

		const randomSender = getRandomSender(users);

		const randomRecipient = getRandomRecipient(users);

		const message = await Message.create({
			messageSenderId: randomSender._id,
			messageSenderName: randomSender.firstName,
			messageRecipientId: randomRecipient._id,
			messageRecipientName: randomRecipient.firstName,
			messageBody: messageBody,
		});

		const sender = await User.findOneAndUpdate(
			{ _id: randomSender._id },
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
			{ _id: randomReceiver._id },
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
		for (let i = 0; i < users.length; i++) {
			const messageBody = messageSeeds[i].messageBody;
			console.log(`created ${i}th message`);
			createSeedMessages(messageBody);
		}
	} catch (err) {
		console.log('something went wrong while creatingSeedMessages');
		console.error(err);
	}

});
