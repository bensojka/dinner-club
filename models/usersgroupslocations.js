"use strict";

module.exports = function(sequelize, DataTypes) {
    var UsersGroupsLocations = sequelize.define("UsersGroupsLocations", {

    }, {
        timestamps: true
    });

    // location.associate = function(models) {
    //     location.belongsToMany(models.group, {
    //         through: "UsersGroupsLocations",
    //         onDelete: "cascade"
    //     });
    // };

    return UsersGroupsLocations;
};