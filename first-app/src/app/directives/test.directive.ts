import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  
  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'blue';
    this.el.nativeElement.style['font-size'] = '20px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
