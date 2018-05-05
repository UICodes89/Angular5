import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name:string = "Manoj";
  navigation = ['Home', 'About', 'Achievement', 'Contact'];
  message;
  footerMessage;

  viewChildMessage;

  //parent to child using @Input
  //parent to child using @output
  //parent to child @viewchild()
  // share data with sibling component

  receiveEvent($event){
    this.message = $event;
  }

  getMessage($event){
    this.footerMessage = $event;
  }

  @ViewChild(HeaderComponent) header;

  ngAfterViewInit(){
    this.message = this.header.message;
  }
}
