import { Component, Input } from '@angular/core'

import type { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() item: Recipe
  @Input() index: number
}
