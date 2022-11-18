import { Component } from '@angular/core';

import { ITransactionsData , store} from '../local-data/data';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',

})
export class SummaryPageComponent {
  transactions: ITransactionsData = store;
}
