module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();


	router.use("/videos",require("./YoutubeRoutes.js")(passport));
	router.use("/records", require("./StopWatchRoutes.js")(passport));
	router.use("/stopwatchtimes", require("./TimesRoutes.js")(passport));
	
	
	
	return router;
};