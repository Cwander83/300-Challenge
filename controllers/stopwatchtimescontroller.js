const db = require("../models");

module.exports = {
    //find all users
    findAllUser: function (req, res) {
        db
            .User
            .find({})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // find all records from one user
    findUserRecords: function (req, res) {
        db
            .User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    //update the user's doc
    updateUser: function (req, res) {
        db
            .User
            .findByIdAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(function (dbUser) {
                console.log(`dbUser ${dbUser}`)
                console.log(`req.body ${req.body}`)
                res.json(dbUser)
            })
            .catch(function (err) {
                res.json(err);
            });

    },
    // update a single user's records
    updateUserRecord: function (req, res) {
        db
            .StopWatchTimes
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
                    }, {
                        new: true
                    });
            })
            .then(function (dbUser) {

                res.json(dbUser);
                console.log(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    // function to find *all records from all users
    findAllRecords: function (req, res) {
        db
            .StopWatchTimes
            .find()
            .sort({
                recordedtime: 1
            })
            .limit(10)
            .then(dbStopWatchTimes => res.json(dbStopWatchTimes))
            .catch(err => res.status(422).json(err));
    },

    // findAllRecords: function (req, res) {     db     .StopWatchTimes
    // .find({})         .then(function (dbStopWatchTimes) {
    // console.log(`dbStopwatchtimes ${dbStopWatchTimes}`);
    // res.json(dbStopWatchTimes);         })         .catch(function (err) {
    //      console.log(`err ${err}`);             res.json(err);         }); }, to
    // populate the times from a user
    populateUser: function (req, res) {
        db
            .User
            .findById(req.params.id)
            .populate("times")
            .sort('recordedtime')
            .exec(function (err, doc) {
                console.log(doc);
                console.log(`err ${err}`);
                res.json(doc)
            })
        // db     .User     .findById(req.params.id)     .populate("times")
        // .then(function (dbUser) {         console.log(`times: ${dbUser}`);
        // res.json(dbUser);     })     .catch(function (err) {         res.json(err);
        //   });
    },
    // to delete a time from a user's record times
    deleteRecord: function (req, res) {

        db
            .StopWatchTimes
            .remove({
                _id: req.params.id
            })
            .then(function (dbStopWatchTimes) {
                res.json(dbStopWatchTimes);
            });
    }
}