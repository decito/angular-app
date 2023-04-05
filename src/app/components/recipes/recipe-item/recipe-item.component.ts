import { Component, Input } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() item: Recipe

  constructor(private RecipesService: RecipesService) {}

  selectRecipe() {
    this.RecipesService.recipeSelected.emit(this.item)
  }
}
