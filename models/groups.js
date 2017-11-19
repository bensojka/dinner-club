module.exports = function(sequelize, DataTypes) {
    var group = sequelize.define("group", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    group.associate = function(models) {

        group.hasMany(models.UsersGroupsLocations, {
            // through: "UsersGroupsLocations",
            onDelete: "cascade"
        });

        group.hasMany(models.user, {
            // through: "UsersGroupsLocations",
            onDelete: "cascade"
        });
    };

    return group;
};