import { Component, OnDestroy, OnInit } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'
import { Subscription } from 'rxjs/internal/Subscription'

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
