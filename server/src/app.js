import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import movieRouter from "./routes/movie.routes.js"
import castRouter from "./routes/cast.routes.js"
import showRouter from "./routes/show.routes.js"
import bookingRouter from "./routes/booking.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"


const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [
      "https://cinevault-tp.vercel.app",
      "https://cinevault-admin-tp.vercel.app",
    ],
    credentials: true,
  })
);

app.get("/", (req,res)=>res.send("server is live"))

app.use("/api/auth", authRouter)

app.use("/api/user", userRouter)

app.use("/api/movie", movieRouter)

app.use("/api/cast", castRouter)

app.use("/api/show", showRouter)

app.use("/api/book-show", bookingRouter)

app.use("/api/dashboard", dashboardRouter)

export default app
