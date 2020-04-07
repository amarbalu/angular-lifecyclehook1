import { Component, OnInit,HostBinding,
HostListener } from '@angular/core';
import {HelloComponent} from "../hello.component"

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
user="amar"
  constructor(){
    console.log(" child - 1.constructor")
  }
  //Host binding binds the property
    @HostBinding ('style.color') color="orange";
  
//Host binding binds the events to host event
    @HostListener('click') onClick(){
      alert("Hostlistener works")
    }

   //ngOnChanges - Input param - changes captured or proprties change captured,
  //  change in fn param - conatins each input param in obect with properties like firstChange,previousValue,currentValue
  ngOnChanges(change):void{
    console.log("child - Input param - changes captured ",change)
  }
   ngAfterViewInit():void{
console.log('child - viewInit after view init')
  }
    ngAfterViewChecked():void{
    console.log('child - viewchecked after view checked')
  }
   //Init - Initialised once in a lifecycle of a component
  ngOnInit():void{
    console.log("child -Initialised once in lifecycle of component")
  }
   ngAfterContentInit():void{
    console.log("child-content init")
  }
  ngAfterContentChecked():void{
      console.log("child-content checked")
  }
  
  ngOnDestroy():void{
console.log("Destroy of component")
  }

}