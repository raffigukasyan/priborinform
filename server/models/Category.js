const pool = require('../db');

class Category {
  async getCategory() {
    const category = await pool.query('SELECT * FROM category');
    const subCategory = await pool.query('SELECT * FROM subcategory');
    category[0].forEach((item) => {
      item.subCat = subCategory[0]?.filter((sub) => sub.id_cat === item.id);
    });
    return category[0];
  }

  async getProduct(id) {
    const product = await pool.query('');
  }
}

module.exports = new Category();
