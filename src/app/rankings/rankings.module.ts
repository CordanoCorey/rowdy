import { NgModule } from '@angular/core';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsComponent } from './rankings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RankingsRoutingModule
  ],
  declarations: [RankingsComponent]
})
export class RankingsModule { }
