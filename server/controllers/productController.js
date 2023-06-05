const CategoryModel = require('../models/Category');
const ProductModel = require('../models/Product');

class ProductController {
  async create(req, res) {}

  async getAll(req, res) {
    const products = await ProductModel.getAll(req.params.title);
    if (!products) res.status(500).send({ error: 'Категория не существует' });
    res.send(products);
  }

  async getProductSubcat(req, res) {
    const products = await ProductModel.getAllSubCat(req.params.title, req.params.subTitle);
    if (!products) res.status(500).send({ error: 'Подкотегория не существует' });
    else {
      res.send(products);
    }
  }
}

module.exports = new ProductController();
