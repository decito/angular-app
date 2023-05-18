import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/internal/Subject'

import { Recipe } from '~/models/recipe/recipe.model'

import { Ingredient } from '~/models/shopping-list/ingredient.model'
import { ShoppingService } from './shopping.service'

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schinitzel',
      'A super-tasty Schinitzel - just awesome!',
      'assets/images/schinitzel.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Fried Potatos', 20)]
    ),
    new Recipe(
      'Special Touched Burger',
      'Havenly sent burger. Addiction warning!',
      'assets/images/burger.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Leaves', 2),
        new Ingredient('Buns', 1)
      ]
    )
  ]

  recipeUpdated = new Subject<Recipe[]>()
  selectedRecipe = new Subject<Recipe>()
  hideTemplate = new Subject<boolean>()

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(i: number) {
    const item = this.recipes.slice()[i]

    this.selectedRecipe.next(item)

    return item
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(i => this.shoppingService.addIngredient(i))
  }

  addRecipe(r: Recipe) {
    this.recipes.push(r)

    this.recipeUpdated.next(this.getRecipes())
  }

  updateRecipe(i: number, r: Recipe) {
    this.recipes[i] = r

    this.recipeUpdated.next(this.getRecipes())
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1)

    this.recipeUpdated.next(this.getRecipes())
  }
}
