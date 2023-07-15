const pool = require('../db');
class User {
  async createUser(name, surname, phone, email, hashPassword) {
    return await pool.query(
      `INSERT INTO users (name, surname, phone, email, password, roles) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, surname, phone, email, hashPassword, 'USER'],
    );
  }

  async findOne(email) {
    const result = await pool.query(
      `SELECT users.id, users.name, users.surname, users.phone, users.email, users.password, users.roles, basket.id AS basketId  FROM users INNER JOIN basket ON users.id = basket.id_user WHERE email LIKE ?
    `,
      [email],
    );
    return result[0];
  }

  async find() {
    return await pool.query(`SELECT * FROM users`);
  }
}

module.exports = new User();
