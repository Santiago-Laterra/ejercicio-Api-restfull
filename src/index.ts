import express, { Request, Response } from "express"
import cors from "cors"
import connectDB from "./config/mongo"
import dotenv from "dotenv"
import bookRoutes from "./routes/bookRoutes"
dotenv.config()

const PORT = process.env.PORT!


const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.json({ status: true })
})

//CRUD


app.use("/books", bookRoutes)

app.use((__: Request, res: Response) => {
  res.status(404).json({ success: false, message: "El recurso no se encuentra" })
})

app.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectDB()
})