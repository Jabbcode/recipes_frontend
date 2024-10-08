import { IngredientI } from "./ingredients";
import { UnitI } from "./unit";

export interface IngredientRecipeI {
  _id: string;
  name: IngredientI;
  quantity: number;
  unit: UnitI;
}

export interface RecipeI {
  _id: string;
  title: string;
  description: string;
  ingredients: IngredientRecipeI[];
}

export interface RecipesResponseI {
  recipes: RecipeI[];
  totalRecipes: number;
  totlaPages: number;
}

export interface RecipeResponseI {
  message: String;
  recipe: RecipeI;
}
