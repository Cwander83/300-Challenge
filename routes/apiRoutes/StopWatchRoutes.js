module.exports = function (passport) {

	const path = require("path");
	const router = require('express').Router();
	const stopwatchcontroller = require("../../controllers/stopwatchtimescontroller.js");


	router.route("/:id")
		.get(stopwatchcontroller.findUserRecords)
		.post(stopwatchcontroller.updateUserRecord)
		.delete(stopwatchcontroller.deleteRecord)
		.put(stopwatchcontroller.populateUser);
	router
		.route("/")
		.get(stopwatchcontroller.findAllUser)
		.get(stopwatchcontroller.findAllRecords);


	return router;
};