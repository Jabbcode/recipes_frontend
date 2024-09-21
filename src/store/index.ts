import { configureStore } from "@reduxjs/toolkit";
import ingredientReducer from "./features/ingredient/ingredientSlice";
import unitReducer from "./features/unit/unitSlice";
import recipeReducer from "./features/recipe/recipeSlice";
// import uiReducer from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    ingredient: ingredientReducer,
    unit: unitReducer,
    recipe: recipeReducer,
    // ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
