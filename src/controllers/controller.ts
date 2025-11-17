import { Request, Response } from "express";
import Book from "../models/BookModel";


const getBooks = async (req: Request, res: Response) => {

  try {
    const book = await Book.find()
    res.json({ success: true, data: book })
  } catch (e) {
    const error = e as Error
    res.status(500).json({ success: false, error: error.message })
  }
}


export default { getBooks }