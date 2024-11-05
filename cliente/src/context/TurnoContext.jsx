import { createContext, useContext, useState } from "react";
import '../api/turno.js'
import { TurnoRequest, getTurnosRequest } from "../api/turno.js";

const TurnoContext = createContext();

export const useTurno = () => {
    const context = useContext(TurnoContext);
    if (!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
};


export function TurnoProvider({children}){

    const [turnos, setTurnos]= useState([])

    const getTurnos = async () => {
        const res = await getTurnosRequest()
        setTurnos(res.data)
    }

    const crearTurno = async (turnos) => {
        try {
            const res = await TurnoRequest(turnos);
            console.log(res.data);
        } catch (error) {
            console.log(error, "No funciona");
        }
    };
    return (
        <TurnoContext.Provider
            value={{turnos,
                crearTurno,
                getTurnos
        }}
        >{children}
        </TurnoContext.Provider>
    );
}