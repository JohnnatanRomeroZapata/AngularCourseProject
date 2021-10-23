import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() eGoToSection = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goTo(section: string){
    this.eGoToSection.emit(section)
  }
}
