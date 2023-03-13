import { Component } from "@angular/core";
import { Ingredient } from "src/app/models/shopping-list/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 7),
    new Ingredient('Eggs', 8),
    new Ingredient('Onions', 9),
  ]
}