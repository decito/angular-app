import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

import { BasicHighlightDirective } from './shared/basic-highlight.directive'
import { DropdownDirective } from './shared/dropdown.directive'
import { HtmlCommentDirective } from './shared/html-comment.directive'
import { UnlessDirective } from './shared/unless.directive'

import { HeaderComponent } from './components/header/header.component'
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component'
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component'
import { RecipesComponent } from './components/recipes/recipes.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    DropdownDirective,
    HeaderComponent,
    HtmlCommentDirective,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    UnlessDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
