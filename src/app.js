import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

//routes
import githubRoutes from "./routes/github.routes.js"
import profileRoutes from "./routes/profile.routes.js"


// declaring routes
app.use("/api/v1/github", githubRoutes)
app.use("/api/v1/profiles", profileRoutes)


export { app }