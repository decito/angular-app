import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ErrorPageComponent } from '~/components/error-page/error-page.component'
import { RecipeDetailComponent } from '~/components/recipes/recipe-detail/recipe-detail.component'
import { RecipesComponent } from '~/components/recipes/recipes.component'
import { ShoppingListComponent } from '~/components/shopping-list/shopping-list.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', redirectTo: '/recipes', pathMatch: 'full' },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Oops... Page not found' }
  },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
