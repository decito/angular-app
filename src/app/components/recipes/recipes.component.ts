import { Component, OnInit } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe

  constructor(private RecipesService: RecipesService) {}

  ngOnInit() {
    this.RecipesService.recipeSelected.subscribe(
      (r: Recipe) => (this.selectedRecipe = r)
    )
  }
}
