module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("group", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    // Group.associate = function(models) {
    //     Group.belongsTo(models.users_groups, {
    //         onDelete: "cascade"
    //     });
    //     Group.belongsTo(models.groups_locations, {
    //         onDelete: "cascade"
    //     })
    // };

    return Group;
};