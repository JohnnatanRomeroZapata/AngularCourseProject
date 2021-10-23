import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  private isOpen = false;

  constructor(private theElement: ElementRef , private renderer: Renderer2) { };

  @HostListener('click') toggleDropdwonList(event: Event){

    const dropdownElements = this.theElement.nativeElement.querySelector('.dropdown-menu');

    if(!this.isOpen){
      this.renderer.addClass(dropdownElements , 'show');
    }else{
      this.renderer.removeClass(dropdownElements , 'show');
    }

    // if(!this.theElement.nativeElement.contains(event.target)){
    //   this.isOpen = false;
    // }else{
    //   this.isOpen = true;
    // }
    
    // document.addEventListener('click', (event) => {
    //     if (event.target !== this.theElement.nativeElement) {
    //         this.isOpen = false;
    //         this.renderer.removeClass(dropdownElements, 'show');
    //     }
    // });

    this.isOpen = !this.isOpen;
  }
}
