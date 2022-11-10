"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../src/mysql/database"));
const ventas = database_1.default.define('Ventas', {
    cod_cliente: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    cedula: {
        type: sequelize_1.DataTypes.INTEGER
    },
    num_venta: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    atendido: {
        type: sequelize_1.DataTypes.STRING
    },
    codigo: {
        type: sequelize_1.DataTypes.NUMBER
    },
    productos: {
        type: sequelize_1.DataTypes.STRING
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = ventas;
//# sourceMappingURL=ventas.js.map