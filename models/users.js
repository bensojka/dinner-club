module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        key: DataTypes.INTEGER
    }, {
        timestamps: true
    });

    User.associate = function(models) {
        User.hasMany(models.location, {
            onDelete: "cascade"
        });
    };

    return User;
};