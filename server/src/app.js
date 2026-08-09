import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"



const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: true,
  credentials: true,
}))


app.get("/", (req,res)=>res.send("server is live"))
app.use("/api/auth", authRouter)

export default app
