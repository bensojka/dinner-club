"use strict";

module.exports = function(sequelize, DataTypes) {
    var UsersGroupsLocations = sequelize.define("UsersGroupsLocations", {

    }, {
        timestamps: true
    });

    // UsersGroupsLocations.associate = function(models) {
    //     location.hasMany(models.group, {
    //         through: "UsersGroupsLocations",
    //         onDelete: "cascade"
    //     });
    // };

    return UsersGroupsLocations;
};