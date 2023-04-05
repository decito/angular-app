import { Component, Input } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() item: Recipe
  @Input() index: number

  constructor(private recipesService: RecipesService) {}

  selectRecipe() {
    this.recipesService.recipeSelected.emit(this.item)
  }
}
