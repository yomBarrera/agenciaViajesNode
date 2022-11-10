import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

// dotenv.config()
console.log(process.env.HB_HOST);

const db = new Sequelize(process.env.HB_NAME, process.env.HB_USER,process.env.HB_PASS, {
    host: process.env.HB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;