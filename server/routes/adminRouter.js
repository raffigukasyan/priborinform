const Router = require('express');
const AdminController = require('../controllers/adminController');

const router = new Router();

router.post('/product', AdminController.createProduct);
router.get('/AdminCategory', AdminController.getCategory);
router.get('/AdminSubCategory', AdminController.getSubCategory);
router.get('/tableCol', AdminController.getColumns);
router.get('/tableData', AdminController.getDataTable);
module.exports = router;
