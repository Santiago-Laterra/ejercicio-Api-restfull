import { connect } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
  const URI_DB = process.env.URI_DB
  try {
    await connect(URI_DB)

    console.log("✅ Se conecto a la base de datos correctamente")
  } catch (error) {
    console.log("❌ Error al conectarse a la base de datos")
    process.exit(1)
  }
}


export default connectDB