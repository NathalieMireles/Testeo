import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test1} from "./backend/controllers/alumnos.controller.js"

dotenv.config();

mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("jala esta madre")
})
.catch((error)=>{
    console.log("no funciona esta madre ", error)
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha correcto, no escucha borroso")
})
test1()


/*
le falta el type  en  el package.json
import {test1} from "./backend/controllers/alumnos.controller.js" aquí estaba exportando test 1 en controller pero no en app
el nombre esta en mayúsculas  name:"Rodolfo",
tiene varias mayúsculas,tambien en el model
el mongoose estaba mal escrito
urlbase = "mongodb://localhost:27017/Testeo/test" elimine el const y  agrege el nombre de la carpeta


*/