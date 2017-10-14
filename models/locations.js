module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("location", {
        name: DataTypes.STRING
    }, {
        timestamps: true
    });

    Location.associate = function(models) {
        Location.belongsTo(models.User, {
            onDelete: "cascade"
        });
    };

    return Location;
};