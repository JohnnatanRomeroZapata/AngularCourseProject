import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  theSection: string = 'recipe';

  receivingEGoToSection(s: string){
    this.theSection = s;
  }
}
