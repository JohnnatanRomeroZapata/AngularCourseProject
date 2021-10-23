import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  n: string = '';
  a: number = 0;

  ingredients: Ingredient[] = [
    new Ingredient("Ingredient1" , 10),
    new Ingredient("Ingredient2" , 20),
    new Ingredient("Ingredient3" , 30),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onReceivingEAddIngredient(ingre: Ingredient ){
    this.ingredients.push(ingre);
  }
}
