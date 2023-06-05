const Router = require('express');

const router = new Router();

const categoryRouter = require('./categoryRouter');

router.use('/catalog', categoryRouter);

module.exports = router;
