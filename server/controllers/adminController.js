const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const Admin = require('../models/Admin');
const Category = require('../models/Category');
const Product = require('../models/Product');

class AdminController {
  async createProduct(req, res, next) {
    const { title, description, catId, subCatId, characteristic } = req.body;

    const { img } = req.files;
    let fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));

    const productId = await Product.createProduct(title, description, fileName);

    const categoryProduct = await Product.createCategoryProduct(catId, subCatId, productId);

    const charasterisitcProd = JSON.parse(characteristic);

    charasterisitcProd.forEach(async (item) => {
      await Product.createCharasteristic(item.title, item.description, productId);
    });

    return res.send('Продукт добавлен');
  }

  async getColumns(req, res, next) {
    const title = req.query.type;

    const col = await Admin.getCol(title);

    return res.send(col);
  }

  async getCategory(req, res, next) {
    const category = await Category.getAll();

    return res.send(category);
  }

  async getSubCategory(req, res, next) {
    const subCategory = await Category.getSubCat();

    return res.send(subCategory);
  }

  async getDataTable(req, res, next) {
    let { limit, page, type } = req.query;

    page = page || 1;
    limit = limit || 4;
    let offset = page * limit - limit;

    const data = await Admin.getData(type, limit, offset);
    return res.send(data);
  }
}

module.exports = new AdminController();
