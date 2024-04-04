import {
	AfterContentChecked,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

import { RecipesService } from '~/services/recipes.service';

import type { Recipe } from '~/models/recipe/recipe.model';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html'
})
export class RecipesComponent
	implements OnInit, AfterContentChecked, OnDestroy
{
	recipeSelected = false;
	hideTemplate = false;

	subscription: Subscription;

	constructor(
		private recipesService: RecipesService,
		private cdRef: ChangeDetectorRef,
		private router: Router
	) {}

	ngOnInit(): void {
		this.subscription = this.recipesService.selectedRecipe.subscribe(
			(r: Recipe) => {
				if (r) this.recipeSelected = true;
			}
		);
	}

	ngAfterContentChecked(): void {
		if (this.router.url.indexOf('/new') > -1) {
			this.hideTemplate = true;
		}

		this.cdRef.detectChanges();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
