import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs/internal/Subject'
import { map } from 'rxjs/internal/operators/map'
import { tap } from 'rxjs/internal/operators/tap'

import { ShoppingService } from './shopping.service'

import { Recipe } from '~/models/recipe/recipe.model'
import { Ingredient } from '~/models/shopping-list/ingredient.model'

import { environment } from 'environment/environment'

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = []

  recipeUpdated = new Subject<Recipe[]>()
  selectedRecipe = new Subject<Recipe>()
  hideTemplate = new Subject<boolean>()

  constructor(
    private shoppingService: ShoppingService,
    private http: HttpClient
  ) {}

  getRecipes() {
    if (!this.recipes.length) this.fetchRecipes().subscribe()

    return this.recipes.slice()
  }

  getRecipe(i: number) {
    const item = this.recipes.slice()[i]

    this.selectedRecipe.next(item)

    return item
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(i => this.shoppingService.addIngredient(i))
  }

  addRecipe(r: Recipe) {
    this.recipes.push(r)

    this.recipeUpdated.next(this.getRecipes())
  }

  updateRecipe(i: number, r: Recipe) {
    this.recipes[i] = r

    this.recipeUpdated.next(this.getRecipes())
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1)

    this.recipeUpdated.next(this.getRecipes())
  }

  storeRecipes() {
    const recipes = this.getRecipes()

    this.http
      .put(`${environment.domain}/recipes.json`, recipes)
      .subscribe(response => console.log(response))
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${environment.domain}/recipes.json`).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        })
      }),
      tap(recipes => this.setRecipes(recipes))
    )
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes

    this.recipeUpdated.next(this.getRecipes())
  }
}
