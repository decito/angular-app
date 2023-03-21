import { Component, OnInit } from '@angular/core'

import { Recipe } from 'src/app/models/recipe/recipe.model'
import { RecipeService } from 'src/app/services/recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }
}
