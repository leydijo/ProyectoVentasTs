"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturas_1 = require("../controllers/facturas");
const router = (0, express_1.Router)();
router.get('/', facturas_1.getFacturas);
router.get('/', facturas_1.getFacturaById);
exports.default = router;
//# sourceMappingURL=facturas.js.map