import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/internal/Subscription'

import { RecipesService } from '~/services/recipes.service'

import type { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]
  subscription: Subscription

  constructor(private RecipesService: RecipesService) {}

  ngOnInit(): void {
    this.subscription = this.RecipesService.recipeUpdated.subscribe(
      (r: Recipe[]) => (this.recipes = r)
    )

    this.recipes = this.RecipesService.getRecipes()
  }

  onHideTemplate() {
    this.RecipesService.hideTemplate.next(true)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
