import express, { Application } from "express";

import factRoutes from '../routes/facturas';

import cors from "cors";
import db from "../src/mysql/database";


class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        facturas: '/api/facturas',
      
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middleware();
        this.dbConnection();
        //routes
        this.routes();
    }

    async dbConnection(){
        try {
           await db.authenticate();
            console.log('Conexión exitosa');
        } catch ( e ) {
           console.log(e);
        }
    }
    middleware() {
        //cors
        this.app.use(cors());

        //lectura del body
        this.app.use(express.json());
        //carpeta
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.facturas, factRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo...' + this.port);
        })
    }
}

export default Server;