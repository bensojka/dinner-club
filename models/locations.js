"use strict";

module.exports = function(sequelize, DataTypes) {
    var location = sequelize.define("location", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    location.associate = function(models) {
        location.hasMany(models.UsersGroupsLocations, {
            // through: "UsersGroupsLocations",
            onDelete: "cascade"
        });
    };

    return location;
};