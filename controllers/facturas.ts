import { Request, Response } from "express"
import Facturas from "../models/factura"

export const getFacturas = async( req: Request,res: Response) =>{
    const facturas = await Facturas.findAll()
  
    res.json({facturas});
}


export const getFacturaById = async( req: Request,res: Response) =>{
    const {id} = req.params
    //const factura = await Facturas.findByPk(id);
    const factura = await Facturas.findAll();
    
    if(factura){
        res.json({factura});
    }else{
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }

}

