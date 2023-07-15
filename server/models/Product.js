const pool = require('../db');
const CategoryModel = require('./Category');

class Product {
  async createCategoryProduct(catId, subCatId, prodId) {
    const categoryProduct = await pool.query(
      `INSERT INTO categoryProduct (id_cat, id_subcat, id_prod) VALUES (?,?,?)`,
      [catId, subCatId, prodId],
    );

    return categoryProduct[0].insertId;
  }
  async createProduct(title, description, fileName) {
    const product = await pool.query(
      `INSERT INTO products (title, description, image) VALUES (?,?,?)`,
      [title, description, fileName],
    );

    return product[0].insertId;
  }

  async createCharasteristic(title, description, productId) {
    let characteristic = await pool.query(
      `INSERT INTO characteristic (id_prod, title, description) VALUES (?,?,?)`,
      [productId, title, description],
    );
    return characteristic[0].insertId;
  }

  async getAll(title, limit, offset) {
    const category = await CategoryModel.getOneCategory(title);
    if (!category) return false;
    const result = await pool.query(
      `SELECT categoryProduct.id, categoryProduct.id_cat, category.title AS categoryTitle, products.id AS prodId, products.title, products.description, products.image FROM categoryProduct INNER JOIN products ON products.id = categoryProduct.id_prod INNER JOIN category ON category.id = categoryProduct.id_cat WHERE categoryProduct.id_cat = ? LIMIT ${limit} OFFSET ${offset};`,
      [category.id],
    );
    let productCount = await pool.query(
      `SELECT COUNT(*) FROM categoryProduct WHERE categoryProduct.id_cat = ?`,
      [category.id],
    );
    productCount = productCount[0][0]['COUNT(*)'];
    return { count: productCount, rows: result[0] };
  }
  async getAllSubCat(title, subTitle, limit, offset) {
    const category = await CategoryModel.getOneCategory(title);
    const subCategory = await CategoryModel.getOneSubCategory(title, subTitle);
    if (!category || !subCategory) return false;
    const result = await pool.query(
      `SELECT categoryProduct.id, categoryProduct.id_cat, category.title AS categoryTitle, categoryProduct.id_subcat, subcategory.title AS subCatTitle, products.id AS prodId, products.title, products.description, products.image FROM categoryProduct INNER JOIN products ON products.id = categoryProduct.id_prod INNER JOIN category ON category.id = categoryProduct.id_cat INNER JOIN subcategory ON subcategory.id = categoryProduct.id_subcat WHERE categoryProduct.id_cat = ? AND categoryProduct.id_subcat = ? LIMIT ${limit} OFFSET ${offset}`,
      [category.id, subCategory.id],
    );
    let productCount = await pool.query(
      `SELECT COUNT(*) FROM categoryProduct WHERE categoryProduct.id_cat = ? AND categoryProduct.id_subcat = ?`,
      [category.id, subCategory.id],
    );
    productCount = productCount[0][0]['COUNT(*)'];
    return { count: productCount, rows: result[0] };
  }
}

module.exports = new Product();
