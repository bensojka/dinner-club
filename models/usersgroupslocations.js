"use strict";

module.exports = function(sequelize, DataTypes) {
    var UsersGroupsLocations = sequelize.define("UsersGroupsLocations", {
        vote: DataTypes.INTEGER
    }, {
        timestamps: true
    });

    // UsersGroupsLocations.associate = function(models) {
    //     location.hasMany(models.location, {
    //         through: "UsersGroupsLocations",
    //         onDelete: "cascade"
    //     });
    // };

    return UsersGroupsLocations;
};