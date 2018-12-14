import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  @HostListener("mouseenter")
  mouseEnter(){
    this.element.nativeElement.style.backgroundColor = "Green";
  }

  @HostListener("mouseleave")
  mouseLeave(){
    this.element.nativeElement.style.backgroundColor = null;
  }

}
