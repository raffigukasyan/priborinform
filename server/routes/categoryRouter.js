const Router = require('express');

const router = new Router();

const CategoryController = require('../controllers/categoryController');

router.post('/');
router.get('/', CategoryController.getAll);

router.get('/:title', CategoryController.getOneCategory);

module.exports = router;
