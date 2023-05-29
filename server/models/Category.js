const pool = require('../db');

class Category {
  async getCategory() {
    const category = await pool.query('SELECT * FROM category');
    const subCategory = await pool.query('SELECT * FROM subcategory');
    console.log(category);
    console.log(subCategory);
  }
}

module.exports = new Category();
