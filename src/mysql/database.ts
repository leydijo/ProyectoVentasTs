// import { createPool, Pool } from 'mysql2/promise'
import { Sequelize } from 'sequelize';



const db = new Sequelize( 'brkqnhl26vim8g9licxe','udnwhg4ndsstzwhj','69FZCUaETTtSDtLqfUJe', {
    host: 'brkqnhl26vim8g9licxe-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    //logging: false,
});

export default db;

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