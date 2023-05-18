import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id: number

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      this.id = +p['id']
      this.recipe = this.recipesService.getRecipe(+p['id']) as Recipe
    })
  }

  addToList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.id)

    this.router.navigate(['/recipes'])
  }
}
