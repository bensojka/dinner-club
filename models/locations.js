"use strict";

module.exports = function(sequelize, DataTypes) {
    var location = sequelize.define("location", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    location.associate = function(models) {
        location.belongsToMany(models.group, {
            through: "UsersGroupsLocations",
            onDelete: "cascade"
        });
    };

    return location;
};