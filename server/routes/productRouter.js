const Router = require('express');

const ProductController = require('../controllers/productController');
const router = new Router();

router.post('/', ProductController.create);
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);

module.exports = router;
