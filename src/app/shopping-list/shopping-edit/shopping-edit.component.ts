import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('ammountInput') ammountInput: ElementRef;
  @Output() eAddIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmmount = this.ammountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName , ingredientAmmount);
    this.eAddIngredient.emit(newIngredient);
  }
}
