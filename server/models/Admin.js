const pool = require('../db');

class Admin {
  async getCol(title) {
    console.log(title);
    const col = await pool.query(`SHOW COLUMNS FROM ${title}`);
    const colData = col[0].map((col) => col['Field']);
    return colData;
  }

  async getData(type, limit, offset) {
    let data = await pool.query(`SELECT * FROM ${type} LIMIT ${limit} OFFSET ${offset}`);
    let dataCounter = await pool.query(`SELECT COUNT(*) FROM ${type}`);

    dataCounter = dataCounter[0][0]['COUNT(*)'];
    return { count: dataCounter, rows: data[0] };
  }
}

module.exports = new Admin();
