import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RecipesResolverService } from './guards/recipes-resolver.service'

import { AuthComponent } from '~/components/auth/auth.component'
import { ErrorPageComponent } from '~/components/error-page/error-page.component'
import { RecipeDetailComponent } from '~/components/recipes/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from '~/components/recipes/recipe-edit/recipe-edit.component'
import { RecipesComponent } from '~/components/recipes/recipes.component'
import { ShoppingListComponent } from '~/components/shopping-list/shopping-list.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
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
