"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventas_1 = require("../controllers/ventas");
const router = (0, express_1.Router)();
router.post('/', ventas_1.postVentas);
exports.default = router;
//# sourceMappingURL=ventas.js.map