import { Router } from "express"
import controller from "../controllers/controller"

const bookRoutes = Router()

bookRoutes.get("/", controller.getBooks)
bookRoutes.get("/:id", controller.getBooksById)
bookRoutes.post("/", controller.addBooks)
bookRoutes.patch("/:id", controller.updateBooks)
bookRoutes.delete("/:id", controller.deleteBooks)


export default bookRoutes