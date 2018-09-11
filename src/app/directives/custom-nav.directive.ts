import {Directive, ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomNav]'
})
export class CustomNavDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-family', 'Lucida Console');
  }
}
              // Custom directive to change font family
