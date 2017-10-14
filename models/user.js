"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    facebookId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {

    }
  });

  return User;
};
