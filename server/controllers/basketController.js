const ApiError = require('../error/ApiError');
const Basket = require('../models/Basket');
class BasketController {
  async addBasket(req, res) {}

  async getAll(req, res, next) {
    const userBasket = await Basket.getUserBasket(req.params.id);
    const productBasket = await Basket.getProductBasket(userBasket[0].id);
    if (!productBasket) {
      next(ApiError.badRequest({ message: 'Корзина не существует' }));
    }
    return res.json(productBasket);
  }
}

module.exports = new BasketController();
