import { Component, OnInit } from '@angular/core';
import { build } from '@caiu/library';
import { Rule } from './rules.model';

@Component({
  selector: 'rowdy-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  constructor() { }

  get sections(): any[] {
    return [
      {
        title: 'Keepers',
        rules: [
          build(Rule, {
            content: `After every season every player has one of five statuses:
              1. Unrestricted Free Agent
              2. Restricted Free Agent
              3. Franchise Tagged (max 1 per team)
              4. Mid-level Exception (max 1 per team)
              5. Rookie Deal Player (max 1 per year per team, max 3 total per team)
            `,
            tags: []
          }),
          build(Rule, {
            content: `The salary cap for keeper + midlevel is: top scorer + 10 fPPG`,
            tags: []
          }),
          build(Rule, {
            name: 'Luxury Tax',
            content: `After the second year with the same franchise tag, teams must start paying a 5 fPPG "luxury tax" per year
             if they wish to continue keeping the same player. So, in the 3rd year with the same franchise tagged player the cap becomes
             top scorer + 5 fPPG, in the 4th year it is max(top scorer fPPG, franchise tag fPPG),
             5th year = max(top scorer fPPG - 5, franchise tag fPPG) and so on.`,
            tags: []
          }),
          build(Rule, {
            content: `Teams may keep one player on his rookie contract per year.`,
            tags: ['rookie contract']
          }),
          build(Rule, {
            content: `Rookie contracts last a total of 3 years.`,
            tags: ['rookie contract']
          }),
          build(Rule, {
            content: `To keep a player on a rookie contract, the player must have been on the team at the end of his rookie year.
             (Note that the player does not have to have been drafted by the team.)`,
            tags: ['rookie contract']
          }),
        ]
      },
      {
        title: 'Draft',
        rules: [
          build(Rule, {
            content: `After every season every player has one of five statuses:
              1. Unrestricted Free Agent
              2. Restricted Free Agent
              3. Franchise Tagged (max 1 per team)
              4. Mid-level Exception (max 1 per team)
              5. Rookie Deal Player (max 1 per year per team, max 3 total per team)
            `,
            tags: []
          }),
          build(Rule, {
            content: `The salary cap for keeper + midlevel is: top scorer + 10 fPPG`,
            tags: []
          }),
          build(Rule, {
            name: 'Luxury Tax',
            content: `After the second year with the same franchise tag, teams must start paying a 5 fPPG "luxury tax" per year
             if they wish to continue keeping the same player. So, in the 3rd year with the same franchise tagged player the cap becomes
             top scorer + 5 fPPG, in the 4th year it is max(top scorer fPPG, franchise tag fPPG),
             5th year = max(top scorer fPPG - 5, franchise tag fPPG) and so on.`,
            tags: []
          }),
          build(Rule, {
            content: `Teams may keep one player on his rookie contract per year.`,
            tags: ['rookie contract']
          }),
          build(Rule, {
            content: `Rookie contracts last a total of 3 years.`,
            tags: ['rookie contract']
          }),
          build(Rule, {
            content: `To keep a player on a rookie contract, the player must have been on the team at the end of his rookie year.
             (Note that the player does not have to have been drafted by the team.)`,
            tags: ['rookie contract']
          }),
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
