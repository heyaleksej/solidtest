import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test3Component } from './test3/test3.component';
import { Test2Component } from './user/components/test2/test2.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { OperationFilterPipe } from './operation-filter.pipe';
import { SingleBlockComponent } from './summary-page/single-block/single-block/single-block.component';

@NgModule({
  declarations: [AppComponent, Test1Component, Test3Component, Test2Component, ListPageComponent, SummaryPageComponent, OperationFilterPipe, SingleBlockComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
