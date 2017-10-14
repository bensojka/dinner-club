"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    facebookId: DataTypes.INT,
    name: DataTypes.STRING
  }, {
    classMethods: {

    }
  });

  return User;
};
