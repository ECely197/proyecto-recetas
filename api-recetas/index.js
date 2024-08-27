import express from "express";
import recipes from "./recipes.js";
const app = express();

// middlewares globales (se usan aqui mismo)

// rutas
app.get("/", (req, res) =>{
    return res.json(recipes);
});

app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000");
});
