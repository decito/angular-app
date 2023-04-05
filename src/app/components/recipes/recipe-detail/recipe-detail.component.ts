import { Component, Input } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe

  constructor(private recipesService: RecipesService) {}

  addToList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
