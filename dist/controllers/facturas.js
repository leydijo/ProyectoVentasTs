"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFacturaById = exports.getFacturas = void 0;
const factura_1 = __importDefault(require("../models/factura"));
const getFacturas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const facturas = yield factura_1.default.findAll();
    res.json({ facturas });
});
exports.getFacturas = getFacturas;
const getFacturaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //const factura = await Facturas.findByPk(id);
    const factura = yield factura_1.default.findAll();
    if (factura) {
        res.json({ factura });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getFacturaById = getFacturaById;
//# sourceMappingURL=facturas.js.map