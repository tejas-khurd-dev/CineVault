import express from "express"
import dotenv from "dotenv/config"
import cors from "cors"
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"



const app = express()

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())


app.get("/", (req,res)=>console.log("server is live"))
app.use("/api/inngest", serve({ client: inngest, functions }));

export default app