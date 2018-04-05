module.exports = function (passport) {

    const router = require('express').Router();
    const stopwatchcontroller = require("../../controllers/stopwatchtimescontroller.js");

    router
        .route("/:id")
        .delete(stopwatchcontroller.deleteRecord)

    router
        .route("/")
        .get(stopwatchcontroller.findAllRecords)
        .get(stopwatchcontroller.populateUser);

    return router;
};