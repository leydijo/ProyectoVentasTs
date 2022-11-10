"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../src/mysql/database"));
const Facturas = database_1.default.define('Factura', {
    Id_cliente: {
        type: sequelize_1.DataTypes.STRING
    },
    Fecha_factura: {
        type: sequelize_1.DataTypes.DATE
    },
    Id_Vendedor: {
        type: sequelize_1.DataTypes.NUMBER
    },
    Valor: {
        type: sequelize_1.DataTypes.DOUBLE
    }
});
exports.default = Facturas;
//# sourceMappingURL=facturas.js.map