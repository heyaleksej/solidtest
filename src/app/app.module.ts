import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListPageComponent} from './list-page/list-page.component';
import {SummaryPageComponent} from './summary-page/summary-page.component';
import {OperationFilterPipe} from './operation-filter.pipe';
import {SingleBlockComponent} from './summary-page/single-block/single-block/single-block.component';
import {SingleTabComponent} from "./list-page/single-tab/single-tab.component";
import { HeaderComponent } from './summary-page/header/header.component';

@NgModule({
  declarations: [AppComponent, ListPageComponent, SummaryPageComponent,
                 OperationFilterPipe, SingleBlockComponent, SingleTabComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
