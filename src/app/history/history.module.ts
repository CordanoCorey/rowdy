import { NgModule } from '@angular/core';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HistoryRoutingModule,
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule { }
