import { DataTypes } from "sequelize";
import db from "../src/mysql/database";


const Facturas = db.define('Factura',{
    Id_cliente:{
        type: DataTypes.STRING
    },
    Fecha_factura:{
        type: DataTypes.DATE
    },
    Id_Vendedor:{
        type: DataTypes.NUMBER
    },
    Valor:{
        type:DataTypes.DOUBLE
    }
});

export default Facturas;