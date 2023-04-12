import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit, AfterContentChecked {
  selectedRecipe = false

  constructor(
    private RecipesService: RecipesService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.RecipesService.recipeSelected.subscribe((r: Recipe) => {
      if (r) this.selectedRecipe = true
    })
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges()
  }
}
