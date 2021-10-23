import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      "Recipe1" , 
      "Recipe1Description" , 
      "https://static.onecms.io/wp-content/uploads/sites/44/2021/02/18/veggie-grilled-cheese-tomato-soup.jpg"),
      new Recipe(
        "Recipe2" , 
        "Recipe2Description" , 
        "https://static.onecms.io/wp-content/uploads/sites/35/2021/02/16/nut-recipes-promo.jpg"),
  ];

  @Output() eReciWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onReceivingERecipeSelected(theR: Recipe){
    this.eReciWasSelected.emit(theR);
  }
}
