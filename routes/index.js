const router = require('express').Router();
const homeRoutes = require('./home');

router.use('/', home);

module.exports = router;
