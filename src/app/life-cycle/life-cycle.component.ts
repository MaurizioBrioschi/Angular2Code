import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  template: `
  {{lifecyclecontent}}
  `
})
export class LifeCycleComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  lifecyclecontent = "";
  constructor() { }

  ngOnChanges(){
    this.log("ngOnChanges");
  }
  ngOnInit() {
    this.log("ngOnInit");
  }
  ngDoCheck(){
    this.log("ngDoCheck");
  }
  ngAfterContentInit(){
    this.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    this.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    this.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    this.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    this.log("ngOnDestroy");
  }

  private log(hook: string){
    console.log(hook);
  }
}
