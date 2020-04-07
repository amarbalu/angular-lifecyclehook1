import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor(){
    console.log("1.constructor")
  }
    @HostBinding ('style.color') color="orange";
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