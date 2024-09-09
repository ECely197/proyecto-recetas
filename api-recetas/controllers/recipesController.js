import { validationResult } from "express-validator";
import recipes from "../data/recipes.js";

function allRecipes(req, res) {
  return res.json(recipes);
}

function findRecipe(req, res) {
  console.log(req.nuevaPropiedad);
  const recipeId = Number(req.params.id);
  for (const recipe of recipes) {
    if (recipe.id === recipeId) {
      return res.json(recipe);
    }
  }
  return res.json({ message: `No se ha encontrado un producto con ese ID` });
}

function createRecipe(req, res) {
  const {
    title,
    description,
    preparation,
    instructions,
    ingredients,
    nutritionalValues,
  } = req.body;
  const newRecipe = {
    id: Number(req.body.id),
    title,
    description,
    preparation: {
      ingredients: preparation.ingredients,
      cooking: preparation.cooking,
      total: preparation.total,
    },
    instructions,
    ingredients,
    nutritionalValues: {
      calories: nutritionalValues.calories,
      carbohydrates: nutritionalValues.carbohydrates,
      protein: nutritionalValues.protein,
      fat: nutritionalValues.fat,
    },
  };

  recipes.push(newRecipe);

  return res.status(201).json(newRecipe);
}

function destroyRecipe(req, res) {
  const recipeId = Number(req.params.id);
  const nuevoArrayDeRecipes = [];
  for (const recipe of recipes) {
    if (recipe.id !== recipeId) {
      nuevoArrayDeRecipes.push(recipe);
    }
  }
  recipes.length = 0;
  recipes.push(...nuevoArrayDeRecipes);
  return res.json({ message: `se ha eliminado el producto ${req.params.id}` });
}

function editRecipe(req, res) {
  const recipeId = Number(req.params.id);
  const {
    title,
    description,
    preparation,
    instructions,
    ingredients,
    nutritionalValues,
  } = req.body;

  for (const recipe of recipes) {
    if (recipe.id === recipeId) {
      if (title) recipe.title = title;
      if (description) recipe.description = description;
      if (preparation) {
        recipe.preparation.ingredients =
          preparation.ingredients || recipe.preparation.ingredients;
        recipe.preparation.cooking =
          preparation.cooking || recipe.preparation.cooking;
        recipe.preparation.total =
          preparation.total || recipe.preparation.total;
      }
      if (instructions) recipe.instructions = instructions;
      if (ingredients) recipe.ingredients = ingredients;
      if (nutritionalValues) {
        recipe.nutritionalValues.calories =
          nutritionalValues.calories || recipe.nutritionalValues.calories;
        recipe.nutritionalValues.carbohydrates =
          nutritionalValues.carbohydrates ||
          recipe.nutritionalValues.carbohydrates;
        recipe.nutritionalValues.protein =
          nutritionalValues.protein || recipe.nutritionalValues.protein;
        recipe.nutritionalValues.fat =
          nutritionalValues.fat || recipe.nutritionalValues.fat;
      }
      return res.json({
        message: `Receta con ID ${recipeId} actualizada`,
        recipe,
      });
    }
  }
  return res
    .status(404)
    .json({ message: `No se encontró ninguna receta con el ID ${recipeId}` });
}

export default {
  allRecipes: allRecipes,
  findRecipe: findRecipe,
  createRecipe: createRecipe,
  destroyRecipe: destroyRecipe,
  editRecipe: editRecipe,
};
