import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MultiplyPipe } from './multiply.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ChildComponentComponent, MultiplyPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
