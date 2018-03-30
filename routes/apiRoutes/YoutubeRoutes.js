
module.exports = function (passport) {

	const path = require("path");
	const router = require('express').Router();
	const youtubecontroller = require("../../controllers/youtubecontroller");

	// YouTube video routes
	router.route("/")
		.get(youtubecontroller.findAll)
		.post(youtubecontroller.create);

	router
		.route("/:id")
		.get(youtubecontroller.findById)
		.put(youtubecontroller.update)
		.delete(youtubecontroller.remove);


	return router;
};