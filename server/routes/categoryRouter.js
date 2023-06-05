const Router = require('express');

const router = new Router();

const CategoryController = require('../controllers/categoryController');
const ProductController = require('../controllers/productController');

router.get('/', CategoryController.getAll);

router.get('/:title', ProductController.getAll);

router.get('/:title/:subTitle', ProductController.getProductSubcat);

module.exports = router;
