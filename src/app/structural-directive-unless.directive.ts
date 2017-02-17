import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructuralDirectiveUnless]'
})
/**
 * Attached something if condition is false
 * It the contrary  of ngIf
 */
export class StructuralDirectiveUnlessDirective {
  @Input() set appStructuralDirectiveUnless(condition: boolean) {
    if(!condition){
      this.viewRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,private viewRef: ViewContainerRef) { }

}
