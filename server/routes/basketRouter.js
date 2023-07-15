const Router = require('express');

const router = Router();

const basketController = require('../controllers/basketController');

router.get('/', basketController.getAll);
router.post('/basketAdd', basketController.addBasket);

module.exports = router;
