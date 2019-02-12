'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Coupons', [{
            id: 'John Doe',
            createTime: new Date(),
            valid: true
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Coupons', null, {});
    }
};
