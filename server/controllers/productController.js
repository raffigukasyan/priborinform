const CategoryModel = require('../models/Category');
const ProductModel = require('../models/Product');
const ApiError = require('../error/ApiError');
class ProductController {
  async create(req, res) {}

  async getAll(req, res, next) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 4;
    let offset = page * limit - limit;

    const products = await ProductModel.getAll(req.params.title, limit, offset);
    if (!products) {
      return next(ApiError.badRequest('Категория не существует'));
    }
    return res.send(products);
  }

  async getProductSubcat(req, res, next) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 4;
    let offset = page * limit - limit;

    const products = await ProductModel.getAllSubCat(
      req.params.title,
      req.params.subTitle,
      limit,
      offset,
    );
    if (!products) return next(ApiError.badRequest('Подкатегория не существует'));
    return res.send(products);
  }
}

module.exports = new ProductController();
