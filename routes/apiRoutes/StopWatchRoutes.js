module.exports = function (passport) {

	const router = require('express').Router();
	const stopwatchcontroller = require("../../controllers/stopwatchtimescontroller.js");

	router.route("/:id")
		.get(stopwatchcontroller.findUserRecords)
		.post(stopwatchcontroller.updateUserRecord);


	router.route("/challenge/:id")
		.post(stopwatchcontroller.updateUser);

	router.route("/challenge/records")
		.get(stopwatchcontroller.findAllChallengeRecords);

	router
		.route("/")
		.get(stopwatchcontroller.findAllUser);

	return router;
};