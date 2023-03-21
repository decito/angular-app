import { EventEmitter, Injectable } from "@angular/core"

import { Recipe } from "src/app/models/recipe/recipe.model"

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Dummy Recipe 1',
      'This is the first dummy recipe.',
      'http://www.alittletipsy.com/wp-content/uploads/2014/05/The-Best-Hambuger-Recipe-Mozzarella-Burgers-square.jpg'
    ),
    new Recipe(
      'Dummy Recipe 2',
      'This is the second dummy recipe.',
      'http://www.alittletipsy.com/wp-content/uploads/2014/05/The-Best-Hambuger-Recipe-Mozzarella-Burgers-square.jpg'
    ),
  ]

  getRecipes() {
    return this.recipes.slice()
  }

  recipeSelected = new EventEmitter<Recipe>()
}