'use strict';
module.exports = (sequelize, DataTypes) => {
    const Coupons = sequelize.define('Coupons', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        createTime: DataTypes.DATE,
        valid: DataTypes.BOOLEAN
    }, {});
    Coupons.associate = function (models) {
        // associations can be defined here
    };
    return Coupons;
};