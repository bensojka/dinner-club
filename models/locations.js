"use strict";

module.exports = function(sequelize, DataTypes) {
    var location = sequelize.define("location", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    location.associate = function(models) {

        location.hasMany(models.UsersGroupsLocations, {
            // location.hasMany(models.locations, {
            // through: "UsersGroupsLocations",
            onDelete: "cascade"
        });

        location.hasMany(models.user, {
            // through: "UsersGroupsLocations",
            onDelete: "cascade"
        });

    };

    return location;
};