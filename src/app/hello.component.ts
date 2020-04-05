import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  constructor(){
    console.log("1.constructor")
  }
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
