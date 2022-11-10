import { Router } from "express";
import { postVentas } from "../controllers/ventas";


const router = Router();

router.post('/',  postVentas);



export default router;
