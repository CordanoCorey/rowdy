import { NgModule } from '@angular/core';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { RuleComponent } from './rule/rule.component';
import { RulesSectionComponent } from './rules-section/rules-section.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RulesRoutingModule,
  ],
  declarations: [
    RulesComponent,
    RuleComponent,
    RulesSectionComponent,
  ]
})
export class RulesModule { }
