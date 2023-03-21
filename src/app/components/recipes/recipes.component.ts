import { Component, OnInit } from "@angular/core"

import { RecipeService } from "src/app/services/recipe.service"

import { Recipe } from "src/app/models/recipe/recipe.model"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((r: Recipe) => this.selectedRecipe = r)
  }
}