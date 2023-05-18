import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/internal/Subscription'

import { ShoppingService } from '~/services/shopping.service'

import type { Ingredient } from '~/models/shopping-list/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = []

  subscription: Subscription

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()

    this.subscription = this.shoppingService.ingredientChanged.subscribe(
      (i: Ingredient[]) => (this.ingredients = i)
    )
  }

  onEditIngredient(id: number) {
    this.shoppingService.editItem.next(id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
