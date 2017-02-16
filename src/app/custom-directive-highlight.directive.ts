import { Directive, ElementRef, Renderer,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveHighlight]'
})
export class CustomDirectiveHighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'green';
  }
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','green');
    this.backgroundColor = 'green';
  }

}
