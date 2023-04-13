import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core'
import { Subscription } from 'rxjs/internal/Subscription'

import { RecipesService } from '~/services/recipes.service'

import { Recipe } from '~/models/recipe/recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  selectedRecipe = false

  subscription: Subscription

  constructor(
    private RecipesService: RecipesService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.RecipesService.recipeSelected.subscribe(
      (r: Recipe) => {
        if (r) this.selectedRecipe = true
      }
    )
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
