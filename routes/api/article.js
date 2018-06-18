const router = require('express').Router();
const articleController = require('../../controllers/articleController');

router.route("/")
    .get(articleController.findAll)
    .post(articleController.findAll);

router.route("/:id")
    .get(articleController.findById)
    .put(articleController.update)
    .delete(articleController.remove);

module.exports = router;
