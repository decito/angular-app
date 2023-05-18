import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { RecipesService } from '~/services/recipes.service'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipeId: number
  editMode = false
  recipeForm: FormGroup

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      this.recipeId = +p['id']

      this.editMode = p['id'] != null

      this.InitForm()
    })
  }

  private InitForm() {
    const recipeFiller = {
      name: '',
      imgPath: '',
      description: '',
      ingredients: new FormArray([])
    }

    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.recipeId)

      recipeFiller.name = recipe.name
      recipeFiller.imgPath = recipe.imgPath
      recipeFiller.description = recipe.description

      if (recipe.ingredients) {
        recipe.ingredients.forEach(i => {
          recipeFiller.ingredients.push(
            new FormGroup({
              name: new FormControl(i.name, Validators.required),
              amount: new FormControl(i.amount, [
                Validators.required,
                Validators.min(1)
              ])
            })
          )
        })
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeFiller.name, Validators.required),
      imgPath: new FormControl(recipeFiller.imgPath, Validators.required),
      description: new FormControl(
        recipeFiller.description,
        Validators.required
      ),
      ingredients: recipeFiller.ingredients
    })
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value

    if (this.editMode)
      this.recipesService.updateRecipe(this.recipeId, newRecipe)
    else this.recipesService.addRecipe(newRecipe)

    this.navigateBack()
  }

  onAddIngredient() {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.min(1)])
      })
    )
  }

  navigateBack() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  removeIngredient(i: number) {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(<FormArray>this.recipeForm.get('ingredients')).removeAt(i)
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }
}
