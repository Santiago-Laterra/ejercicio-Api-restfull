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

const addBooks = async (req: Request, res: Response) => {
  const body = req.body

  try {
    //desestructuramos el cuerpo de la peticion
    const { title, author, publishedYear, genre, available } = body

    //vemos si estan vacios
    if (!title || !author || !publishedYear || !genre || !available) {
      return res.status(400).json({ success: false, message: "Datos Invalidos" })
    }

    //si estan bien cremos un nuevo objeto book
    const newBook = new Book({ title, author, publishedYear, genre, available })

    newBook.save()
    res.json({ success: true, data: newBook })

  } catch (e) {
    const error = e as Error
    res.status(500).json({ success: false, error: error.message })
  }
}

const updateBooks = async (req: Request, res: Response) => {
  const id = req.params.id
  const body = req.body


  try {

    const { title, author, publishedYear, genre, available } = body

    //validamos si el id es correcto
    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "ID invalido" })
    }

    if (!title || !author || !publishedYear || !genre || !available) {
      return res.status(400).json({ success: false, message: "Datos Invalidos" })
    }

    const update = { title, author, publishedYear, genre, available }

    const book = await Book.findByIdAndUpdate(id, update, { new: true })

    //vemos si el item se encontro
    if (!book) {
      res.status(404).json({ success: false, message: "No se encontro" })
    }

    res.json({ success: true, data: book })

  } catch (e) {
    const error = e as Error
    res.status(500).json({ success: false, error: error.message })
  }
}

const deleteBooks = async (req: Request, res: Response) => {

  const id = req.params.id

  try {

    //validamos el id
    if (Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "ID invalido" })
    }

    //buscamos el book y lo borramos
    const book = await Book.findByIdAndDelete(id)

    //validamos si lo encontro
    if (!book) {
      res.status(404).json({ success: false, message: "No se encontro" })
    }

    res.json({ success: true, data: book })

  } catch (e) {
    const error = e as Error
    res.status(400).json({ success: false, error: error.message })
  }
}

export default { getBooks, getBooksById, addBooks, updateBooks, deleteBooks }