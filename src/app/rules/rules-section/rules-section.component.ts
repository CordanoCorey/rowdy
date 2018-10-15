import { Component, OnInit, Input } from '@angular/core';

import { RulesSection } from '../rules.model';

@Component({
  selector: 'rowdy-rules-section',
  templateUrl: './rules-section.component.html',
  styleUrls: ['./rules-section.component.scss']
})
export class RulesSectionComponent implements OnInit {

  @Input() section: RulesSection = new RulesSection();

  constructor() { }

  ngOnInit() {
    console.dir(this.section);
  }

}
