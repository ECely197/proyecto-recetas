import { body, validationResult } from "express-validator";

const recipeValidation = {
  createRecipe: [
    body("title")
      .notEmpty()
      .withMessage("El título es obligatorio. Por favor, ingresa un título.")
      .isString()
      .withMessage("El título debe ser un texto sin caracteres especiales"),
    body("description")
      .notEmpty()
      .withMessage("La descripción es obligatoria")
      .isString()
      .withMessage(
        "La descripción debe ser un texto sin caracteres especiales"
      ),
    body("preparation.ingredients")
      .notEmpty()
      .withMessage("El tiempo de preparación de ingredientes es obligatorio")
      .isString()
      .withMessage(
        "El tiempo de preparación de ingredientes debe ser un texto"
      ),
    body("preparation.cooking")
      .notEmpty()
      .withMessage("El tiempo de cocción es obligatorio")
      .isString()
      .withMessage("El tiempo de cocción debe ser un texto"),
    body("preparation.total")
      .notEmpty()
      .withMessage("El tiempo total de preparación es obligatorio")
      .isString()
      .withMessage("El tiempo total de preparación debe ser un texto"),
    body("instructions")
      .isArray({ min: 1 })
      .withMessage(
        "Las instrucciones deben ser un arreglo con al menos un elemento"
      ),
    body("ingredients")
      .isArray({ min: 1 })
      .withMessage(
        "Los ingredientes deben ser un arreglo con al menos un elemento"
      ),
    body("nutritionalValues.calories")
      .notEmpty()
      .withMessage("Las calorías son obligatorias")
      .isNumeric()
      .withMessage("Las calorías deben ser un número"),
    body("nutritionalValues.carbohydrates")
      .notEmpty()
      .withMessage("Los carbohidratos son obligatorios")
      .isString()
      .withMessage("Los carbohidratos deben ser un texto"),
    body("nutritionalValues.protein")
      .notEmpty()
      .withMessage("La proteína es obligatoria")
      .isString()
      .withMessage("La proteína debe ser un texto"),
    body("nutritionalValues.fat")
      .notEmpty()
      .withMessage("La grasa es obligatoria")
      .isString()
      .withMessage("La grasa debe ser un texto"),
  ],
  updateRecipe: [
    body("title")
      .notEmpty()
      .withMessage("El título es obligatorio. Por favor, ingresa un título.")
      .isString()
      .withMessage("El título debe ser un texto sin caracteres especiales"),
    body("description")
      .optional()
      .isString()
      .withMessage(
        "La descripción debe ser un texto sin caracteres especiales"
      ),
    body("preparation.ingredients")
      .optional()
      .isString()
      .withMessage(
        "El tiempo de preparación de ingredientes debe ser un texto"
      ),
    body("preparation.cooking")
      .optional()
      .isString()
      .withMessage("El tiempo de cocción debe ser un texto"),
    body("preparation.total")
      .optional()
      .isString()
      .withMessage("El tiempo total de preparación debe ser un texto"),
    body("instructions")
      .optional()
      .isArray()
      .withMessage("Las instrucciones deben ser un arreglo"),
    body("ingredients")
      .optional()
      .isArray()
      .withMessage("Los ingredientes deben ser un arreglo"),
    body("nutritionalValues.calories")
      .optional()
      .isNumeric()
      .withMessage("Las calorías deben ser un número"),
    body("nutritionalValues.carbohydrates")
      .optional()
      .isString()
      .withMessage("Los carbohidratos deben ser un texto"),
    body("nutritionalValues.protein")
      .optional()
      .isString()
      .withMessage("La proteína debe ser un texto"),
    body("nutritionalValues.fat")
      .optional()
      .isString()
      .withMessage("La grasa debe ser un texto"),
  ],
};

export default recipeValidation;
