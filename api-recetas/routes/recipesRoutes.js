import recipesController from "../controllers/recipesController.js";
import recipeValidation from "../middlewares/recipeValidation.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.json("bienvenido");
});

router.get("/recipes", recipesController.allRecipes);

router.get("/recipes/:id", recipesController.findRecipe);

router.post(
  "/recipes",
  recipesController.createRecipe,
  recipeValidation.createRecipe
);

router.delete("/recipes/:id", recipesController.destroyRecipe);

router.patch(
  "/recipes/:id",
  recipesController.editRecipe,
  recipeValidation.updateRecipe
);

export default router;
