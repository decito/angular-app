import { Component, Input } from '@angular/core'

import { RecipeService } from 'src/app/services/recipe.service'

import { Recipe } from 'src/app/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipeService) { }

  addToList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
