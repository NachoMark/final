import mongoose from "mongoose";


const turnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido : {
        type: String,
        required: true,
    },
    telefono : {
        type: Number,
        required: true,
    },
    doctor: {
        type: String,
        required: true,
    },
    fecha: {
        type: String
    },
    hora: {
        type: String
    }
})

export default mongoose.model("Turno", turnoSchema)