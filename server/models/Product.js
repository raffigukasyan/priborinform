const pool = require('../db');
const CategoryModel = require('./Category');

class Product {
  async getAll(title) {
    const category = await CategoryModel.getOneCategory(title);
    const result = await pool.query(
      `SELECT categoryProduct.id, categoryProduct.id_cat, category.title AS categoryTitle, products.id AS prodId, products.title, products.description, products.image FROM categoryProduct INNER JOIN products ON products.id = categoryProduct.id_prod INNER JOIN category ON category.id = categoryProduct.id_cat WHERE categoryProduct.id_cat = ?;`,
      [category.id],
    );
    return result[0];
  }
  async getAllSubCat(title, subTitle) {
    const category = await CategoryModel.getOneCategory(title);
    const subCategory = await CategoryModel.getOneSubCategory(title, subTitle);
    if (!category || !subCategory) return false;
    const result = await pool.query(
      `SELECT categoryProduct.id, categoryProduct.id_cat, category.title AS categoryTitle, categoryProduct.id_subcat, subcategory.title AS subCatTitle, products.id AS prodId, products.title, products.description, products.image FROM categoryProduct INNER JOIN products ON products.id = categoryProduct.id_prod INNER JOIN category ON category.id = categoryProduct.id_cat INNER JOIN subcategory ON subcategory.id = categoryProduct.id_subcat WHERE categoryProduct.id_cat = ? AND categoryProduct.id_subcat = ?;`,
      [category.id, subCategory.id],
    );
    return result[0];
  }
}

module.exports = new Product();
