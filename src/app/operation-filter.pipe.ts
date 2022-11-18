import { Pipe, PipeTransform } from '@angular/core';
import {ITransaction, TransactionType} from "./local-data/data";


@Pipe({
  name: 'operationFilter'
})
export class OperationFilterPipe implements PipeTransform {

  transform(store: ITransaction[], type: TransactionType): ITransaction[] {
    return store.filter((operation) => operation.type === type);
  }
}


