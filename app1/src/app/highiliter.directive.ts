import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighiliter]'
})
export class HighiliterDirective {

  constructor(private el:ElementRef) { }

    private highlight(bgColor, color){
      this.el.nativeElement.style.color = color;
      this.el.nativeElement.style.backgroundColor = bgColor;
    }

    @HostListener('mouseenter') onmouseHover(){
      this.highlight("red", "#fff");
    } 

    @HostListener('mouseout') onmouseout(){
      this.highlight("", "");
    } 
    
   

}
