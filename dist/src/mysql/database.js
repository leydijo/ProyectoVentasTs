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
//# sourceMappingURL=database.js.map