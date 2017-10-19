module.exports = function(sequelize, DataTypes) {
    var group = sequelize.define("group", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    group.associate = function(models) {
        group.belongsToMany(models.user, {
            through: "UsersGroupsLocations",
            onDelete: "cascade"
        });
        Group.belongsTo(models.groups_locations, {
            onDelete: "cascade"
        });
    };

    return group;
};