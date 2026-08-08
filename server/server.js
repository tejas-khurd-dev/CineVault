import app from './src/app.js'
import connectDB from './src/config/database.js'

await connectDB()
app.listen(process.env.PORT, ()=> console.log("server is running"))