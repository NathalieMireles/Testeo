//COMO Y EL DONDE SE GUARDAN LOS DATOS
import{Schema, model} from "mongoose";

const Eschema = new Schema({
    name:{
        type:String
    },
    edad:{
        type:Number
    }
})
export const Modelo = new model("Tabla de alumnos", Eschema)