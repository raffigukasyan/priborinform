const CategoryModel = require('../models/Category');
const ProductModel = require('../models/Product');
const ApiError = require('../error/ApiError');
class ProductController {
  async create(req, res) {}

  async getAll(req, res, next) {
    const products = await ProductModel.getAll(req.params.title);
    if (!products) {
      return next(ApiError.badRequest('Категория не существует'));
    }
    return res.send(products);
  }

  async getProductSubcat(req, res, next) {
    const products = await ProductModel.getAllSubCat(req.params.title, req.params.subTitle);
    if (!products) return next(ApiError.badRequest('Подкатегория не существует'));
    return res.send(products);
  }
}

module.exports = new ProductController();
