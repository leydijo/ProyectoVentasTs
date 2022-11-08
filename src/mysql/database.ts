import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.MY_SQL_DB_HOST,
        user: process.env.MY_SQL_DB_USER,
        password: process.env.MY_SQL_DB_PASSWORD,
        //port: process.env.MY_SQL_DB_PORT,
        database: process.env.MY_SQL_DB_DATABASE, 
        connectionLimit:10
    });
    return connection;
}