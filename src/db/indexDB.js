import mysql from "mysql2/promise";

import { DB_NAME } from "../constants.js";
export let db;
export const connectDB = async () => {
    try {
        db = await mysql.createConnection({
            host: "localhost",
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        })
        await db.query(
            `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`
        );

        await db.query(
            `USE ${DB_NAME}`
        );
        console.log(`\n MySql connected !! DB HOST ${db.config.host}`);
        return db;

    } catch (error) {
        console.log("MySql connection error", error)
        process.exit(1)
    }
}

