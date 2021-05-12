import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[AppBasicHighlight]'

})
export class BasicHighlighyDirective implements OnInit{
 
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
        this.elementRef.nativeElement.style.padding = '9px';
    }
}