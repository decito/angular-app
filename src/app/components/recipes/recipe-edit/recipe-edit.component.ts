import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipeId: number
  editMode = false

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      this.recipeId = +p['id']
      this.editMode = p['id'] != null
    })
  }
}
