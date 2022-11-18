import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITransaction, store, TransactionType } from '../local-data/data';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})

export class ListPageComponent implements OnInit {
  transactions: ITransaction[] = store.data;
  filteredTransactions: ITransaction[] = [];
  transactionType: TransactionType = 'income';

  getAmount() {
    return (Math.random() * 4000).toFixed(2);
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      switch (params['tab']) {
        case '1':
          this.transactionType = 'outcome';
          break;
        case '2':
          this.transactionType = 'loan';
          break;
        case '3':
          this.transactionType = 'investment';
          break;
        case '0':
        default:
          this.transactionType = 'income';
          break;
      }

      this.filteredTransactions = this.transactions.filter(
        (transaction) => transaction.type === this.transactionType,
      );
    });
  }
}
