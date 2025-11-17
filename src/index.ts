import express, { Request, Response } from "express"
import cors from "cors"
import connectDB from "./config/mongo"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT!


const app = express()

app.use(cors)
app.use(express.json())


app.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectDB()
})