import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { Subscription } from 'rxjs/internal/Subscription'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeId: number
  editMode = false

  subscribe: Subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscribe = this.route.params.subscribe((p: Params) => {
      this.recipeId = +p['id']
      this.editMode = p['id'] != null
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }
}
