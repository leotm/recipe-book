import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Ogi', 'Ogi is a fermented cereal pudding from Nigeria...', 'http://www.allnigerianrecipes.com/images/akamu-ogi.jpg'),
    new Recipe('Moussaka', 'Moussaka is an eggplant- (aubergine) or potato-based dish...', 'http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/59/13/0/piceIFigJ.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
