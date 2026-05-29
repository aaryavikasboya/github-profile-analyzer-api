import dotenv from "dotenv"
import { connectDB, db } from "./db/indexDB.js";
import { app } from "./app.js";
import createProfileTable from "./models/profile.table.js";

dotenv.config({
    path: './.env'
})

connectDB()
    .then(async (db) => {
        console.log("DB READY:", typeof db);
        await createProfileTable(db)
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`);

        })
    })
    .catch((err) => {
        console.log("MySQL connection failed!!!", err);

    })