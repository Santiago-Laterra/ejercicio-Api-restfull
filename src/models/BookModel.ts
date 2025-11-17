import { model, Model, Schema } from "mongoose"
import { IBook } from "../interfaces/IBook"


const BookSchema = new Schema<IBook>({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { type: String },
  available: { type: Boolean, default: true }

}, {
  versionKey: false
}
)


const Book: Model<IBook> = model("Book", BookSchema)


export default Book