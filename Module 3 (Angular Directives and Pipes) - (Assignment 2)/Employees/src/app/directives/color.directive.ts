import { Directive, ElementRef, HostListener } from "@angular/core";
import { element } from "protractor";

@Directive({
    selector: '[appColor]'
})

export class ColorDirective {
    constructor(private element: ElementRef) {}

    @HostListener('mouseover')onMouseOver() {
        this.element.nativeElement.style.backgroundColor='#b1cdcd';
    }
    @HostListener('mouseout')onMouseOut() {
        this.element.nativeElement.style.backgroundColor='initial';
    }
}