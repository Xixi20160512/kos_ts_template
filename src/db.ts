import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    host: '127.0.0.1',
    database: 'database_development',
    dialect: 'mysql',
    username: 'root',
    password: '123456',
    modelPaths: [__dirname + '/models']
});

export default sequelize