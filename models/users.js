module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        key: DataTypes.INT
    }, {
        timestamps: true
    });

    User.associate = function(models) {
        User.hasMany(models.Location, {
            onDelete: "cascade"
        });
    };

    return User;
};