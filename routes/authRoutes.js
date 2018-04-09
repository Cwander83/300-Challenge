const User = require("../models").User;
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.get("/isAuthenticated", function (req, res) {
		if (req.isAuthenticated()) {
			res.json({
				userId: req.user._id,
				username: req.user.username,
				email: req.user.email,
				firstname: req.user.firstname,
				lastname: req.user.lastname,
				state: req.user.state,
				country: req.user.country,
				isAuthenticated: true,
				challengeregistered: req.user.challengeregistered
			});
			// you can also pass up any other fields you with to expose for example,
			// nickname: req.user.nickname
		} else {
			res.json({
				userId: null,
				username: null,
				isAuthenticated: false
			});
		}
	});

	router.post("/signup", function (req, res) {
		const newUser = req.body;
		User.register(newUser, newUser.password, (err, user) => {
			if (err) {
				return res.json(err.message);
			}
			res.json({
				userId: user._id,
				username: user.username,
				email: user.email,
				firstname: user.firstname,
				lastname: user.lastname,
				state: user.state,
				country: user.country,
				isAuthenticated: true,
				challengeregistered: user.challengeregistered
			});
		});
	});

	router.post("/signin", passport.authenticate('local'), function (req, res) {
		// console.log(req.user);
		res.json({
			userId: req.user._id,
			username: req.user.username,
			email: req.user.email,
			firstname: req.user.firstname,
			lastname: req.user.lastname,
			state: req.user.state,
			country: req.user.country,
			isAuthenticated: true,
			challengeregistered: req.user.challengeregistered
		});
	});

	router.get('/logout', function (req, res) {
		req.logout();
		res.json();
	});

	return router;
};