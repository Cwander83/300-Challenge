module.exports = function (passport) {

    const router = require('express').Router();
    const stopwatchcontroller = require("../../controllers/stopwatchtimescontroller.js");

    router
        .route("/:id")
        .get(stopwatchcontroller.populateUser)
        .delete(stopwatchcontroller.deleteRecord);

    router
        .route("/")
        .get(stopwatchcontroller.findAllRecords);

    return router;
};