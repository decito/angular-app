import { Component, OnInit } from '@angular/core'

import { ShoppingService } from '~/services/shopping.service'

import { Ingredient } from '~/models/shopping-list/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()

    this.shoppingService.ingredientChanged.subscribe(
      (i: Ingredient[]) => (this.ingredients = i)
    )
  }
}
