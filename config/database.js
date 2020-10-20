require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = new Sequelize('CRM', 'postgres', `${process.env.POSTGRES_PASS}`, {
    host: 'localhost',
    dialect: 'postgres',
    operationAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});