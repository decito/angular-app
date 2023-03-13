import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from 'src/app/models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Dummy Recipe 1',
      'This is the first dummy recipe.',
      'http://www.alittletipsy.com/wp-content/uploads/2014/05/The-Best-Hambuger-Recipe-Mozzarella-Burgers-square.jpg'
    ),
    new Recipe(
      'Dummy Recipe 2',
      'This is the second dummy recipe.',
      'http://www.alittletipsy.com/wp-content/uploads/2014/05/The-Best-Hambuger-Recipe-Mozzarella-Burgers-square.jpg'
    ),
  ]

  @Output() itemToEmit = new EventEmitter<Recipe>()

  emitItem(recipe: Recipe) {
    this.itemToEmit.emit(recipe)
  }
}
