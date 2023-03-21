import { Component, OnInit } from "@angular/core"

import { ShoppingService } from "src/app/services/shopping.service"

import { Ingredient } from "src/app/models/shopping-list/ingredient.model"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []

  constructor(private shoppigService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppigService.getIngredients()

    this.shoppigService.ingredientChanged.subscribe((i: Ingredient[]) => this.ingredients = i)
  }
}