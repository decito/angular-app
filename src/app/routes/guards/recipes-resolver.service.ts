import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { Recipe } from '~/models/recipe/recipe.model'

import { RecipesService } from '~/services/recipes.service'

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipesService) {}

  resolve(): Recipe[] | Observable<Recipe[]> {
    const recipes = this.recipeService.getRecipes()

    if (recipes.length) return recipes

    return this.recipeService.fetchRecipes()
  }
}
