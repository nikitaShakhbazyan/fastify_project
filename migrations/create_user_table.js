const sequelize = require('../config/sequelize');
const User = require('../models/user');

const createTable = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Таблицы успешно синхронизированы');
    } catch (error) {
        console.error('Ошибка при синхронизации:', error);
    }
}

createTable();
