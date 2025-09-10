import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onClick($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onClick(event: MouseEvent) {
    const confirmsExist = window.confirm('Are you sure you want to leave?');

    if (confirmsExist) {
      this.hostElement.nativeElement.href += '?ref=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
