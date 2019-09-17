const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbcalendar', 'allison', '$uportE99', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}