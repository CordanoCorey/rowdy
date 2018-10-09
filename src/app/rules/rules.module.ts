import { NgModule } from '@angular/core';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RulesRoutingModule,
  ],
  declarations: [RulesComponent]
})
export class RulesModule { }
