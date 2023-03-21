import { Component, ElementRef, ViewChild } from '@angular/core'

import { ShoppingService } from 'src/app/services/shopping.service'

import { Ingredient } from 'src/app/models/shopping-list/ingredient.model'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef

  constructor(private shoppingService: ShoppingService) { }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)

    this.shoppingService.addIngredient(newIngredient)
  }
}
