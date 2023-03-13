import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() item: Recipe

  @Output() itemSelected = new EventEmitter<Recipe>()

  onItemClick() {
    this.itemSelected.emit()
  }
}
