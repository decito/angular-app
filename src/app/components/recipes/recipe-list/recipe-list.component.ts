import { Component } from '@angular/core';

import { Recipe } from 'src/app/models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Dummy Recipe',
      'This is a dummy recipe.',
      'http://www.alittletipsy.com/wp-content/uploads/2014/05/The-Best-Hambuger-Recipe-Mozzarella-Burgers-square.jpg'
    ),
    new Recipe(
      'Dummy Recipe',
      'This is a dummy recipe.',
      'http://www.alittletipsy.com/wp-content/uploads/2014/05/The-Best-Hambuger-Recipe-Mozzarella-Burgers-square.jpg'
    ),
  ]

  constructor() { }

  ngOnInit() { }
}
