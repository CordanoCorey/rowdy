import { Component, OnInit, Input } from '@angular/core';

import { Rule } from '../rules.model';

@Component({
  selector: 'rowdy-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  @Input() rule: Rule = new Rule();

  constructor() { }

  ngOnInit() {
  }

}
