const db = require('../models');

//Methods for the article controller

module.exports = {
    findAll: function(req, res) {
        db.Article
            .find(req,query)
            .sort({ date: 1 })
            .then(nytreact => res.json(nytreact))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Article
            .findById(req.params.id)
            .then(nytreact => res.json(nytreact))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Article
            .create(req.body)
            .then(nytreact => res.json(nytreact))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Article
            .findById({ _id: req.params.id })
            .then(nytreact => nytreact.remove())
            .then(nytreact => res.json(nytreact))
            .catch(err => res.status(422).json(err));
    },
};