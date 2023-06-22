const Router = require('express');

const router = new Router();

const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');

router.use('/catalog', categoryRouter);
router.use('/user', userRouter);
router.use('/basket', basketRouter);
module.exports = router;
