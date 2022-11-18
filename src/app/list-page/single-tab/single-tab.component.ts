import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-tab',
  templateUrl: './single-tab.component.html',
})

export class SingleTabComponent {
  @Input() name?: string
  @Input() tabQuery?: number
}
