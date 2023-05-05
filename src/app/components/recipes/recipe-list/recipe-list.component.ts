import { Component, OnInit } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]

  constructor(private RecipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.RecipesService.getRecipes()
  }

  onHideTemplate() {
    this.RecipesService.hideTemplate.next(true)
  }
}
