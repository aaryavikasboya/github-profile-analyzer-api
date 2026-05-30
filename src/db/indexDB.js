import mysql from "mysql2/promise";

// import { DB_NAME } from "../constants.js";
export let db;
export const connectDB = async () => {
    try {
        db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        })

        console.log(`\n MySql connected !! DB HOST ${process.env.DB_HOST}`);
        return db;

    } catch (error) {
        console.log("MySql connection error", error)
        process.exit(1)
    }
}

