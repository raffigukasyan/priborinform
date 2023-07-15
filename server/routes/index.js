const Router = require('express');

const router = new Router();

const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');
const adminRouter = require('./adminRouter');
router.use('/catalog', categoryRouter);
router.use('/user', userRouter);
router.use('/basket', basketRouter);
router.use('/admin', adminRouter);
module.exports = router;
