import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClient } from '@angular/common/http';

import {DataService} from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchString :any= '';
  baseUrl:string = "http://www.json-generator.com/api/json/get/bOtsGyLpKa?indent=2";
  response;

  message : string= "Hello Parent from header !!!";
  anyMessage = '';

  constructor(private httpClient: HttpClient,private data:DataService) { }

  ngOnInit() {
     this.data.currentMessage.subscribe(msg => this.anyMessage = msg  )
     this.data.changeMessage("Hello to sevice to any component");
  }
  

  getData(){
    
      this.httpClient.get(this.baseUrl).subscribe((res)=>{
          console.log(res);
          this.response = res;
      });
 
  }
  @Input('navigation') navs;
  @Input() title;

  addClass(color){
   console.log(color);
  }
  getSearchString(event){
    this.searchString = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return (this.searchString.length > 0) ? 'green': 'red';
  }
  
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  

}
