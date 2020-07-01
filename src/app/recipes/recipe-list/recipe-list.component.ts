import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // lets define the way the recipe object look like; as a model in the ts file
  recipes: Recipe[] = [
    // creating one recipe -- using the constructor
    new Recipe(
      'TestRecipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'
    ),
    new Recipe(
      'TestRecipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
