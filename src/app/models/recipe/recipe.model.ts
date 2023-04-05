import { Ingredient } from '~/models/shopping-list/ingredient.model'

export class Recipe {
  name: string
  description: string
  imgPath: string
  ingredients: Ingredient[]

  constructor(n: string, d: string, p: string, i: Ingredient[]) {
    this.name = n
    this.description = d
    this.imgPath = p
    this.ingredients = i
  }
}
