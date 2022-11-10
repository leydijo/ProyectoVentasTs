import { Router } from "express";
import { getFacturaById, getFacturas } from "../controllers/facturas";
import { postVentas } from "../controllers/ventas";


const router = Router();

router.get('/',    getFacturas);
router.get('/', getFacturaById);
router.post('/',  postVentas);

export default router;
