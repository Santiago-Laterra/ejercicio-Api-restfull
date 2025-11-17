import { Request, Response } from "express";
import Book from "../models/BookModel";
import { Types } from "mongoose";

const getBooks = async (req: Request, res: Response) => {

  try {
    const book = await Book.find()
    res.json({ success: true, data: book })
  } catch (e) {
    const error = e as Error
    res.status(500).json({ success: false, message: error.message })
  }
}

const getBooksById = async (req: Request, res: Response) => {

  const id = req.params.id

  try {

    //validar si es de objetcID

    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "ID invalido" })
    }

    //si esta bien, buscamos el libro
    const book = await Book.findById(id)

    //vemos si el libro se encontro
    if (!book) {
      return res.status(404).json({ success: false, message: "No se encontro" })
    }

    //en caso de exito le damos la respuesta
    res.json({ success: true, data: book })
  } catch (e) {
    const error = e as Error
    res.status(500).json({ success: false, message: error.message })
  }

}


export default { getBooks, getBooksById }