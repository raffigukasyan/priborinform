const Router = require('express');

const router = Router();
const BasketController = require('../controllers/basketController');
const basketController = require('../controllers/basketController');

router.get('/', basketController.getAll);
router.get('/basketAdd', basketController.addBasket);

module.exports = router;
