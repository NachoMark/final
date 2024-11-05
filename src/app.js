import express from "express"
import morgan from "morgan"
import rutas from "./rutas/turnos.routes.js"


const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use("/", rutas)

export default app