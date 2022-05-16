const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('just_tech_news_db', 'root', process.env.DB_PSWRD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize;