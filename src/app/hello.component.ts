import { Component, Input,HostBinding } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 >Hello {{name}}!</h1>
  <app-child-component></app-child-component>`,
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
    console.log("1.constructor")
  }
  bgColor="100px"
  //HostBinding helps to change it host tag property as variable 
  // it can be used further
  @HostBinding ('style.color') color="pink";
   //ngOnChanges - Input param - changes captured or proprties change captured,
  //  change in fn param - conatins each input param in obect with properties like firstChange,previousValue,currentValue
  ngOnChanges(change):void{
    console.log("Input param - changes captured ",change)
  }
   //Init - Initialised once in a lifecycle of a component
  ngOnInit():void{
    console.log("Initialised once in lifecycle of component")
  }
  ngOnDestroy():void{
console.log("Destroy of component")
  }
}
