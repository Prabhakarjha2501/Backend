require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port:3306,
     dialect: 'mysql',
    pool: {
        max: Number(process.env.DB_MAX_POOL_CONNECTIONS) || 5,
        min: Number(process.env.DB_MIN_POOL_CONNECTIONS) || 0,
        acquire: Number(process.env.DB_CONNECTION_ACQUIRE_TIMEOUT) || 30000,
        idle: Number(process.env.DB_CONNECTION_IDLE_TIMEOUT) ||  10000,
    },
});

module.exports = sequelize;
