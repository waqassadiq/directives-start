import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterInteractiveListener]'
})
export class BetterInteractiveListenerDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','purple');

  }

  @HostListener('mouseenter') 
  mouseOver(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }
  
  @HostListener('mouseleave') 
  mouseLeave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','green');
  }

}
