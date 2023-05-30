const CategoryModel = require('../models/Category');

class CategoryController {
  async create(req, res) {}

  async getAll(req, res) {
    const result = await CategoryModel.getCategory();
    res.json(result);
  }
  async getOneCategory(req, res) {
    let title = req.params.title;
    const category = await CategoryModel.getCategory();
    const par = category.find((cat) => cat.title === title);
    if (!par) {
      res.status(500).send({ error: 'Something failed!' });
    }
  }
}

module.exports = new CategoryController();
