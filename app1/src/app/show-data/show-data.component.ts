import { Component, OnInit } from '@angular/core';

import {DataService} from "../data.service";


@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  message;
  constructor(private data :DataService) { 
    this.data.currentMessage.subscribe(msg => this.message = msg);
  }

  ngOnInit() {
  }

}
