import recipesRoutes from "./api-recetas/routes/recipesRoutes.js";
import express from "express";

const app = express();
app.use(express.json());

app.use(recipesRoutes);

app.get("*", (req, res) => res.status(404).json(`Not Found`));

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
