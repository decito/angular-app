import { Component, Input } from '@angular/core'
import { Recipe } from 'src/app/models/recipe/recipe.model'
import { RecipeService } from 'src/app/services/recipe.service'

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
