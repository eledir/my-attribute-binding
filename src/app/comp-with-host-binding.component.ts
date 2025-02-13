import {Component, HostBinding} from '@angular/core';

@Component({
  standalone: true,
  selector: 'comp-with-host-binding',
  template: 'I am a component!',
})
export class CompWithHostBindingComponent {
  @HostBinding('class.special')
  isSpecial = false;

  @HostBinding('style.color')
  color = 'pink';

  @HostBinding('style.width')
  width = '200px';
}
