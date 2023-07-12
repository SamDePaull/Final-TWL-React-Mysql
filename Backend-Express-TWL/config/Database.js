import { Sequelize } from 'sequelize';
import config from './config.cjs'; // Ubah pemanggilan ke config.cjs

const { host, username, password, database, dialect } = config.database;

const db = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
});

export default db;
