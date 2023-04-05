import { EventEmitter, Injectable } from '@angular/core'

import { Ingredient } from '~/models/shopping-list/ingredient.model'

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 7),
    new Ingredient('Eggs', 8),
    new Ingredient('Onions', 9)
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  ingredientChanged = new EventEmitter<Ingredient[]>()

  addIngredient(i: Ingredient) {
    this.ingredients.push(i)

    this.ingredientChanged.emit(this.getIngredients())
  }
}
