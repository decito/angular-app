import { Component, Input } from '@angular/core'

import { RecipeService } from 'src/app/services/recipe.service'

import { Recipe } from 'src/app/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() item: Recipe

  constructor(private recipeService: RecipeService) { }

  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.item)
  }
}
