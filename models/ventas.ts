import { DataTypes } from "sequelize";
import db from "../src/mysql/database";


const ventas = db.define('Ventas',{
 
    cod_cliente:{
        type:DataTypes.INTEGER
    },
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
  
    cedula:{
        type: DataTypes.INTEGER
    },
    num_venta:{
        type: DataTypes.INTEGER
    },
    fecha:{
        type:DataTypes.DATE
    },
    atendido:{
        type:DataTypes.STRING
    },
    codigo:{
        type:DataTypes.NUMBER
    },
    productos:{
        type:DataTypes.STRING
    },
    cantidad:{
        type:DataTypes.INTEGER
    }
   
});

export default ventas;
