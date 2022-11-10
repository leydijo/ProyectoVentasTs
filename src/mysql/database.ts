// import { createPool, Pool } from 'mysql2/promise'
import { Sequelize } from 'sequelize';



const db = new Sequelize( 'brkqnhl26vim8g9licxe','udnwhg4ndsstzwhj','69FZCUaETTtSDtLqfUJe', {
    host: 'brkqnhl26vim8g9licxe-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    //logging: false,
});



export default db;
