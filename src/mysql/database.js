"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { createPool, Pool } from 'mysql2/promise'
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('process.env.MY_SQL_DB_DATABASE', 'process.env.MY_SQL_DB_USER', 'process.env.MY_SQL_DB_PASSWORD', {
    host: process.env.MY_SQL_DB_HOST,
    dialect: 'mysql',
    //logging: false,
});
exports.default = db;
try {
    db.authenticate();
    console.log('Conexión exitosa');
}
catch (error) {
    throw new Error();
}
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