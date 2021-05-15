import {
Directive,
HostBinding,
ElementRef,
Renderer2,
HostListener,
Input
 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightPassValueFromDom]'
})
export class BetterHighlightPassValueFromDomDirective {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightCollor: string = "pink";

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');

  }

  @HostListener('mouseenter') 
  mouseOver(eventData: Event){
    this.backgroundColor = this.highlightCollor;
  }
  
  @HostListener('mouseleave') 
  mouseLeave(eventData: Event){
    this.backgroundColor = this.defaultColor;
  }
}
