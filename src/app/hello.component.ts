import { Component, Input,HostBinding,ViewChild,ContentChild, QueryList } from '@angular/core';
import {ChildComponentComponent} from "./child-component/child-component.component";

@Component({
  selector: 'hello',
  template: `<h1 >Hello {{name}}!</h1>
  <app-child-component>Hi I got value from hello - {{name}}</app-child-component>
  <br/>
 `,
  styles: [`h1 { font-family: Lato; }`],
  host:{
    'style.color': 'red',
      // --- it sets property directly change in inspect element
    '[style.width]':'bgColor'
  }
})
export class HelloComponent  {
  @Input() name: string;
  constructor(){
    console.log("hello - 1.constructor")
  }
  @ViewChild(ChildComponentComponent,{static:true}) childComp:ChildComponentComponent ;
    @ContentChild(ChildComponentComponent) contentComp:QueryList<ChildComponentComponent>;
  bgColor="100px" //--hostbinding in decorator
  //HostBinding helps to change it host tag property as variable 
  // it can be used further
  @HostBinding ('style.color') color="pink";
   //ngOnChanges - Input param - changes captured or proprties change captured,
  //  change in fn param - conatins each input param in obect with properties like firstChange,previousValue,currentValue
  ngOnChanges(change):void{
    console.log("hello -Input param - changes captured ",change)
  }
  ngAfterViewInit():void{
console.log('hello - viewInit '+JSON.stringify(this.childComp))
  }
  //changes need to implement after child render can be implemented here get viewchild - we need to give a timeout as angular follows unidirectional way pf binding
    ngAfterViewChecked():void{
    console.log('hello - viewchecked'+JSON.stringify(this.childComp))
  }
   //Init - Initialised once in a lifecycle of a component
  ngOnInit():void{
    console.log("Initialised once in lifecycle of component")
  }
  ngAfterContentInit():void{
    console.log("hello-content init -"+this.contentComp)
  }
  ngAfterContentChecked():void{
      console.log("hello-content checked -"
      +this.contentComp)
  }
  ngOnDestroy():void{
console.log("Destroy of component")
  }
}
