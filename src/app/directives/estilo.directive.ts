import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstilo]'
})
export class EstiloDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20'),
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#989998'),
    this.renderer.setStyle(this.element.nativeElement, 'color', '#ffffff'),
    this.renderer.setStyle(this.element.nativeElement, 'text-transform', 'uppercase'),
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold'),
    this.renderer.setStyle(this.element.nativeElement, 'letter-spacing', '2px')
   }

}
