import { Component } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private recipesService: RecipesService) {}

  onSave() {
    this.recipesService.storeRecipes()
  }

  onFetch() {
    this.recipesService.fetchRecipes().subscribe()
  }
}
