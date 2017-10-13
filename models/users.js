module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        timestamps: true
    });

    // User.associate = function(models) {
    //     User.belongsTo(models.users_groups, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
};