import { Component } from '@angular/core'

import { RecipesService } from '~/services/recipes.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private recipesService: RecipesService) {}

  navList = [
    { routerLink: '/recipes', name: 'Recipes' },
    { routerLink: '/shopping', name: 'Shopping' },
    { routerLink: '/auth', name: 'Login' }
  ]

  onSave() {
    this.recipesService.storeRecipes()
  }

  onFetch() {
    this.recipesService.fetchRecipes().subscribe()
  }
}
