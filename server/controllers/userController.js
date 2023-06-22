const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Basket = require('../models/Basket');

const generateJwt = (userId, name, surname, phone, email, roles) => {
  return jwt.sign({ id: userId, name, surname, phone, email, roles }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res, next) {
    const { name, surname, phone, email, password } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'));
    }

    const candidate = await User.findOne(email);
    if (candidate.length) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.createUser(name, surname, phone, email, hashPassword);
    const result = await User.findOne(email);
    const basket = await Basket.create(result[0].id);
    const token = generateJwt(result[0].id, name, surname, phone, email, result[0].roles);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne(email);

    if (!user) {
      return next(ApiError.internal('Ползьзовател не найден'));
    }

    let comaprePassword = bcrypt.compareSync(password, user[0].password);

    if (!comaprePassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = generateJwt(
      user[0].id,
      user[0].name,
      user[0].surname,
      user[0].phone,
      user[0].email,
      user[0].roles,
    );
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(
      req.user.id,
      req.user.name,
      req.user.surname,
      req.user.phone,
      req.user.email,
      req.user.roles,
    );
    return res.json({ token });
  }
}

module.exports = new UserController();
