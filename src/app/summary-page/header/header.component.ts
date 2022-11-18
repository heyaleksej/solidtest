import {Component, Input} from '@angular/core';
import {ITransactionsData} from "../../local-data/data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() transactions?: ITransactionsData
}
