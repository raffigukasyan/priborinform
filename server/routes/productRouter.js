const Router = require('express');

const ProductController = require('../controllers/productController');
const router = new Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);

module.exports = router;
