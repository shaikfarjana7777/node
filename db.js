
const Sequelize = require ('sequelize');

const sequelize = new Sequelize('student', 'root', 'aspen123', {//please add your specific database information ==> Database , user ,password
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
