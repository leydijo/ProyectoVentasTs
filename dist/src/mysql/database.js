"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { createPool, Pool } from 'mysql2/promise'
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('brkqnhl26vim8g9licxe', 'udnwhg4ndsstzwhj', '69FZCUaETTtSDtLqfUJe', {
    host: 'brkqnhl26vim8g9licxe-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    //logging: false,
});
exports.default = db;
// export async function connect(): Promise<Pool> {
//     const connection = await createPool({
//         host: process.env.MY_SQL_DB_HOST,
//         user: process.env.MY_SQL_DB_USER,
//         password: process.env.MY_SQL_DB_PASSWORD,
//         //port: process.env.MY_SQL_DB_PORT,
//         database: process.env.MY_SQL_DB_DATABASE, 
//         connectionLimit:10
//     });
//     return connection;
// }
//# sourceMappingURL=database.js.map