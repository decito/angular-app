import { EventEmitter, Injectable } from '@angular/core'

import { Recipe } from '~/models/recipe/recipe.model'

import { Ingredient } from '~/models/shopping-list/ingredient.model'
import { ShoppingService } from './shopping.service'

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schinitzel',
      'A super-tasty Schinitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Israeli_schnitzel_and_pasta.jpg/1280px-Israeli_schnitzel_and_pasta.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Fried Potatos', 20)]
    ),
    new Recipe(
      'Special Touched Burger',
      'Havenly sent burger. Addiction warning!',
      'http://www.alittletipsy.com/wp-content/uploads/2014/05/The-Best-Hambuger-Recipe-Mozzarella-Burgers-square.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Leaves', 2),
        new Ingredient('Buns', 1)
      ]
    )
  ]

  constructor(private shoppingService: ShoppingService) {}

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(i: number) {
    const item = this.recipes.slice()[i]

    this.recipeSelected.emit(item)

    return item
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(i => this.shoppingService.addIngredient(i))
  }
}
