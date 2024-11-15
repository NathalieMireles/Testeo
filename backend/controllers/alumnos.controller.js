import { Modelo } from "../models/alumnos.model.js";

Modelo.create({
    name:"Rodolfo",
    edad:25
})

export const test1 = ()=>{
    console.log("Funciona el controlador")
}