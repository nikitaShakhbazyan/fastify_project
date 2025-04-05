import sequelize from "../config/sequelize";
import User from "../models/user";

const createTable = async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Таблицы успешно синхронизированы');
    } catch (error) {
        console.error('Ошибка при синхронизации:', error);
    }
}

createTable();
