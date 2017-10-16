"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
  }, {
      timestamps: true
  });

  user.associate = function(models) {
      user.belongsToMany(models.group, {
          through: "UsersGroupsLocations",
          onDelete: "cascade"
      });
  };

  return user;
};