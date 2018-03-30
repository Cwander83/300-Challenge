const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StopWatchTimes = new Schema({

    recordedtime: String,

    date: {
        type: Date,
        default: Date.now
    },

    challenge: Boolean,

});


module.exports = mongoose.model('StopWatchTimes', StopWatchTimes);