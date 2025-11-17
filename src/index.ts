import express, { Request, Response } from "express"
import cors from "cors"
import connectDB from "./config/mongo"
import controller from "./controllers/controller"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT!


const app = express()

app.use(cors)
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.json({ status: true })
})

//CRUD
app.get("/books", controller.getBooks)




app.use((__: Request, res: Response) => {
  res.status(404).json({ success: false, error: "El recurso no se encuentra" })
})

app.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectDB()
})