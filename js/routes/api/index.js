const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./blurbRoutes');

router.use('/users', userRoutes);
router.use('/events', blurbRoutes);
router.use
module.exports= router;