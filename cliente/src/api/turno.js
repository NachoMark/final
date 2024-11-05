import axios from "./axios";


const API ='http://localhost:3000/api'

export const getTurnosRequest = async () => axios.get("/turnos");
export const TurnoRequest = async (turno) => axios.post("/turnos", turno);