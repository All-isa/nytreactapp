const db = require('../models');
const axios = require('axios');

//Methods for the article controller

module.exports = {
    findAll: function(req, res) {
        db.Article
            .find(req,query)
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Article
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Article
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Article
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    search: function(req, res) {
        console.log("searching for nytimes articles");
        const URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=";
        const APIKEY = "&api-key=af0bb210bd7c4cd9b78c653a91be9174";
        const query = URL + req.params.query + APIKEY;
        console.log(query);
    
        axios
        .get(query)
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => {
            console.log(err)
            res.send({ err })
        });
    }
};