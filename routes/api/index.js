const router = require('express').Router();
const savedRoutes = require('./saved')
const articleRoutes = require('./article');

router.use("./articles", articleRoutes);
router.use("./saved",  savedRoutes);

module.exports = router;
