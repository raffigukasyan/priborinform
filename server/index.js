require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const pool = require('./db.js');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
