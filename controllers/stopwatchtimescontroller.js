const db = require("../models");

module.exports = {
    findAllUser: function (req, res) {
        db
            .User
            .find({})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    findUserRecords: function (req, res) {
        db
            .User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    updateUserRecord: function (req, res) {
        db
            .StopWatchTime
            .create(req.body)
            .then(function (dbStopWatchTimes) {
                console.log(`dbstopwatchtimes ${dbStopWatchTimes}`);
                console.log(`body: ${req.body}`)
                return db
                    .User
                    .findByIdAndUpdate(req.params.id, {
                        $push: {
                            times: dbStopWatchTimes._id
                        }
                    }, {new: true});
            })
            .then(function (dbUser) {

                res.json(dbUser);
                console.log(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    findAllRecords: function (req, res) {
        db
            .dbStopWatchTimes
            .find({})
            .then(function (dbStopWatchTimes) {
                res.json(dbStopWatchTimes);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    populateUser: function (req, res) {
        db
            .User
            .findById(req.params.id)
            .populate("times")
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {

                res.json(err);
            });
    },

    deleteRecord: function (req, res) {

        db
            .dbStopWatchTimes
            .remove({_id: req.params.id})
            .then(function (dbStopWatchTimes) {
                res.json(dbStopWatchTimes);
            });
    }
}