export class Recipe {
  name: string;
  description: string;
  imgPath: string;

  constructor(n: string, d: string, i: string) {
    this.name = n;
    this.description = d;
    this.imgPath = i;
  }
}