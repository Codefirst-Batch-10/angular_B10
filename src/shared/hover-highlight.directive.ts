import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private _el:ElementRef, private _renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.removeStyle(this._el.nativeElement, 'background-color');
  }
}
