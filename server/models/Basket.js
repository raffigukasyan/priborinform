const pool = require('../db');

class Basket {
  async create(userId) {
    const result = await pool.query(`INSERT INTO basket (id_user) VALUES (?)`, [userId]);
    return result[0];
  }

  async getUserBasket(userId) {
    const result = await pool.query(`SELECT * FROM basket WHERE id_user LIKE ?`, [userId]);
    return result[0];
  }

  async getProductBasket(basketId) {
    const result = await pool.query(`SELECT * FROM basketProduct WHERE id_basket = ?`, [basketId]);
    return result[0];
  }

  async addBasket(prodId, basketId) {
    const result = await pool.query(
      `INSERT INTO basketProduct (id_prod, id_basket) VALUES ('?', '?')`,
      [prodId, basketId],
    );
    return result[0];
  }
}

module.exports = new Basket();
