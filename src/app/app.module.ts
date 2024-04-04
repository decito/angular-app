import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from '~/routes/app-routing.module'

import { AppComponent } from '~/app.component'

import { BasicHighlightDirective } from '~/shared/basic-highlight.directive'
import { DropdownDirective } from '~/shared/dropdown.directive'
import { HtmlCommentDirective } from '~/shared/html-comment.directive'
import { UnlessDirective } from '~/shared/unless.directive'

import { AuthComponent } from './components/auth/auth.component'
import { ButtonComponent } from './components/button/button.component'
import { ErrorPageComponent } from '~/components/error-page/error-page.component'
import { HeaderComponent } from '~/components/header/header.component'
import { RecipeDetailComponent } from '~/components/recipes/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from '~/components/recipes/recipe-edit/recipe-edit.component'
import { RecipeItemComponent } from '~/components/recipes/recipe-item/recipe-item.component'
import { RecipeListComponent } from '~/components/recipes/recipe-list/recipe-list.component'
import { RecipesComponent } from '~/components/recipes/recipes.component'
import { ShoppingListComponent } from '~/components/shopping-list/shopping-list.component'
import { ShoppingListEditComponent } from '~/components/shopping-list/shopping-list-edit/shopping-list-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ButtonComponent,
    BasicHighlightDirective,
    DropdownDirective,
    ErrorPageComponent,
    HeaderComponent,
    HtmlCommentDirective,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
