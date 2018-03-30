const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.YouTube
            .find(req.query)
            .sort({
                _id: -1
            })
            .then(doc => res.json(doc))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.YouTube
            .findById(req.params.id)
            .then(dbYouTube => res.json(dbYouTube))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.YouTube
            .create(req.body)
            .then(dbYouTube => res.json(dbYouTube))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.YouTube
            .findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(YouTube => res.json(YouTube))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.YouTube
            .findById({
                _id: req.params.id
            })
            .then(YouTube => YouTube.remove())
            .then(YouTube => res.json(YouTube))
            .catch(err => res.status(422).json(err));
    }
};