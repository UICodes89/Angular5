import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  private loop1;
  private loop2;
  private loop3;
  private time=30;
  private i=0;
  private number;
  private selector3;
  private selector2;
  private selector1;

  constructor(private el:ElementRef) { }

  ngOnInit() {
    
    this.rotate();
  }

  public randomNum(){
    return Math.floor(Math.random() * 9)+1;
   
  }

  rotate(){
    console.log("404 page");
    console.log(this.el.nativeElement.childNodes[2]);
    this.selector3 =  this.el.nativeElement.querySelector('.thirdDigit');
    this.selector2 =  this.el.nativeElement.querySelector('.secondDigit');
    this.selector1 =  this.el.nativeElement.querySelector('.firstDigit');
    console.log( this.randomNum())

   this.loop3 = setInterval(() => {
        if(this.i > 40) {
            clearInterval(this.loop3);
            this.selector3.textContent = 4;
        }else{
          this.selector3.textContent = this.randomNum();
          this.i++;
        }
     }, this.time);


    this.loop2 = setInterval(() => {
              "use strict";
                if(this.i > 80){
                    clearInterval(this.loop2);
                    this.selector2.textContent = 0;
                }else {
                    this.selector2.textContent = this.randomNum();
                    this.i++;
                }
    }, this.time);

    this.loop1 = setInterval(() => {
              "use strict";
                if(this.i > 100){
                    clearInterval(this.loop1);
                    this.selector1.textContent = 4;
                }else{
                    this.selector1.textContent = this.randomNum();
                    this.i++;
                }
            }, this.time);
  }


  

}
