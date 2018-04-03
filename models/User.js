const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({

		times: {
				type: Schema.Types.ObjectId,
				ref: "StopWatchTimes"
		},
		email: {
			type: String,
			match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
		},
		favoritescene: String,
		firstName: {
			type: String,
			trim: true,
			
		},
		lastName: {
			type: String,
			trim: true,
			
		},
		state: String,
		country: String
});

// passport-local-mongoose creates a 'username' and some password fields for you
// you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);