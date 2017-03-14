var Sequelize = require('sequelize');

var sequelize = new Sequelize("_databaseName_", "_username_", "_password_", {
  dialect: 'postgres'
  
});

var User = sequelize.define('User', 
{
  username: DataTypes.STRING,
  password: DataTypes.STRING
})

User.sync();

var user = User.create({ username: "admin", password: "bolognese" });
