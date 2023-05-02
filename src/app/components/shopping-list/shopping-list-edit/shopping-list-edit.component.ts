import { Component, OnInit } from '@angular/core'

import { ShoppingService } from '~/services/shopping.service'

import { Ingredient } from '~/models/shopping-list/ingredient.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit {
  ingredientForm: FormGroup

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.min(1)])
    })
  }

  onAddItem() {
    const ingName = this.ingredientForm.value['name']
    const ingAmount = this.ingredientForm.value['amount']
    const newIngredient = new Ingredient(ingName, ingAmount)

    this.shoppingService.addIngredient(newIngredient)
  }
}
