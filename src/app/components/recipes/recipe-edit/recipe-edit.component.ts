import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params } from '@angular/router'
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
    private route: ActivatedRoute
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
    console.log(this.recipeForm)
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

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }
}
