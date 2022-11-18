import {Component, Input} from '@angular/core';
import {ITransactionsData, store, TransactionType} from "../../../local-data/data";

@Component({
  selector: 'app-single-block',
  templateUrl: './single-block.component.html'
})


export class SingleBlockComponent {
  transactions: ITransactionsData = store;
  @Input() operationFilter?: TransactionType
  @Input() name?: string
  @Input() tabQuery?: number
}
