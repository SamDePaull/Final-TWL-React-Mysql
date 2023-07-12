import { Sequelize } from 'sequelize';
import  db  from '../config/Database.js';

const { DataTypes } = Sequelize;

const User = db.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User;

(async()=>{
    await db.sync();
})();


