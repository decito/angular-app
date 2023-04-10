import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { Subscription } from 'rxjs/internal/Subscription'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe

  subscription: Subscription

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (p: Params) =>
        (this.recipe = this.recipesService.getRecipe(+p['id']) as Recipe)
    )
  }

  addToList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
