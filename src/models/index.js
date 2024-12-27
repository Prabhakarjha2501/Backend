const{Sequelize} =require('sequelize');
const sequelize = require('../config/dbconfig');
const ColorModel = require('./color');

const db = {
  Sequelize,
  sequelize,
  colorModel:ColorModel(sequelize,sequelize.DataTypes)
  };

module.exports = db;

