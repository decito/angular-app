import { Component } from "@angular/core";
import { Recipe } from "src/app/models/recipe/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {
  selectedRecipe: Recipe

  assignSelectedRecipe(r) {
    this.selectedRecipe = r
  }
}