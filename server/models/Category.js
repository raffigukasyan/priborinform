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
  async getOneCategory(title) {
    const category = await this.getCategory();
    const result = category.find((cat) => cat.title === title);
    return result;
  }
  async getOneSubCategory(title, subTitle) {
    const category = await this.getOneCategory(title);
    if (category.subCat.length) {
      return category.subCat.find((subcat) => subcat.title === subTitle);
    } else {
      console.log('FALSEEEEEEE');
    }
  }
}

module.exports = new Category();
