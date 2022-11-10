import { Request, Response } from "express"
import Venta from "../models/ventas"


export const postVentas = async( req: Request,res: Response) =>{
    const { body } = req;

    try {
   
        const venta = Venta.build(body)
        await venta.save();

        res.json(venta);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Reporte el incidente'
        })
    }
  
}

