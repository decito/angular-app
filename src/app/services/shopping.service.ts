import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/internal/Subject'

import { Ingredient } from '~/models/shopping-list/ingredient.model'

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 7),
    new Ingredient('Eggs', 8),
    new Ingredient('Onions', 9)
  ]

  ingredientChanged = new Subject<Ingredient[]>()
  editItem = new Subject<number>()

  getIngredient(id: number) {
    return this.ingredients[id]
  }

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i)

    this.ingredientChanged.next(this.getIngredients())
  }

  updateIngredient(id: number, newValues: Ingredient) {
    this.ingredients[id] = newValues

    this.ingredientChanged.next(this.getIngredients())
  }
}
