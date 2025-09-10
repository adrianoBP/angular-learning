import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host: {
    '(click)': 'log()',
  },
})
export class LogDirective {
  private elementRef = inject<ElementRef>(ElementRef);

  log() {
    console.log('Element clicked!', this.elementRef.nativeElement);
  }
}
