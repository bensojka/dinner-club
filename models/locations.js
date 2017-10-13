module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("location", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    // Location.associate = function(models) {
    //     Location.belongsTo(models.groups_locations, {
    //         onDelete: "cascade"
    //     });
    // };

    return Location;
};