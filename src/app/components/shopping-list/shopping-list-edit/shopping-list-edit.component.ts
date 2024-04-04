import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

import { ShoppingService } from '~/services/shopping.service';

import { Ingredient } from '~/models/shopping-list/ingredient.model';

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit {
	ingredientForm: FormGroup;
	subscription: Subscription;
	editedItemIndex: number;
	editMode = false;

	constructor(private shoppingService: ShoppingService) {}

	ngOnInit(): void {
		this.ingredientForm = new FormGroup({
			name: new FormControl(null, Validators.required),
			amount: new FormControl(null, [Validators.required, Validators.min(1)])
		});

		this.subscription = this.shoppingService.editItem.subscribe(
			(id: number) => {
				this.editMode = true;
				this.editedItemIndex = id;
				const ingredient = this.shoppingService.getIngredient(id);

				this.ingredientForm.setValue({
					name: ingredient.name,
					amount: ingredient.amount
				});
			}
		);
	}

	onSubmit() {
		const ingName = this.ingredientForm.value['name'];
		const ingAmount = this.ingredientForm.value['amount'];
		const newIngredient = new Ingredient(ingName, ingAmount);

		if (this.editMode) {
			this.shoppingService.updateIngredient(
				this.editedItemIndex,
				newIngredient
			);

			this.editMode = false;

			return;
		}

		this.shoppingService.addIngredient(newIngredient);

		this.onReset();
	}

	onReset() {
		this.editMode = false;

		this.ingredientForm.reset();
	}

	onDelete() {
		this.shoppingService.deleteIngredient(this.editedItemIndex);

		this.onReset();
	}
}
