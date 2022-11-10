import { Router } from "express";
import { getFacturaById, getFacturas } from "../controllers/facturas";


const router = Router();

router.get('/',    getFacturas);
router.get('/:id', getFacturaById);

export default router;