import { Directive, ElementRef, Renderer,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveHighlight]'
})
export class CustomDirectiveHighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color',this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

}
