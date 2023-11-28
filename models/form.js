
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Form = sequelize.define('Form', {
  Fullname: {
    type: DataTypes.STRING,
  },
  Firstname: {
    type: DataTypes.STRING,
  },
  DOB: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
});

module.exports = Form;
