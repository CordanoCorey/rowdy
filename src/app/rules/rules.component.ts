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
            content: `
              <div class="heading">After each season every player has one of five statuses:</div>
              <span class="ordered-item"><b>1. <u>Unrestricted Free Agents:</u></b> Players who were not protected by any team.</span>
              <span class="ordered-item"><b>2. <u>Restricted Free Agents:</u></b> Players who are one of the ten protected players for a team.</span>
              <span class="ordered-item"><b>3. <u>Franchise Tags</u></b> (max 1 per team)</span>
              <span class="ordered-item"><b>4. <u>Mid-level Exceptions</u></b> (max 1 per team)</span>
              <span class="ordered-item"><b>5. <u>Rookie Deal Players</u></b> (max 1 per year per team, max 3 total per team)</span>
            `,
            tags: []
          }),
          build(Rule, {
            heading: 'Salary Cap',
            content: `The salary cap for keeper + midlevel is: top scorer + 15 FPPG`,
            tags: []
          }),
          build(Rule, {
            heading: 'Luxury Tax',
            content: `After the second year with the same franchise tag / mid-level exception, teams must start paying a 5 FPPG "luxury tax" per year
             if they wish to continue keeping the same player. So, in the 3rd year with the same franchise tagged / mid-level exception player, the cap becomes
             top scorer + 10 FPPG, in the 4th year it is top scorer FPPG + 5, 5th year = top scorer FPPG, and so on.`,
            tags: []
          }),
          build(Rule, {
            heading: 'Mid-level Exception',
            content: `A player must have started and scored more than 0 points in at least 5 games for the team seeking to declare that player as its mid-level exception.`,
            tags: ['mid-level exception']
          }),
          build(Rule, {
            heading: 'Rookie Contract',
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
          build(Rule, {
            heading: 'Restricted Free Agents',
            content: `Before the draft, owners rank the top 10 players on the roster. These ranks represents rounds after which that player is protected in the draft.
             For more details, see the Draft section.`,
            tags: ['']
          }),
        ]
      },
      {
        title: 'Draft',
        rules: [
          build(Rule, {
            content: `
              <div class="heading">Rookie Draft Order</div>
              <span class="ordered-item">1. Loser's Bracket #1 / Most Points Regular Season / Best Regular Season Record (Tiebreaker: Most points scored in playoffs)</span>
              <span class="ordered-item">2. Loser's Bracket #1 / Most Points Regular Season / Best Regular Season Record (Tiebreaker: 2nd most points scored in playoffs)</span>
              <span class="ordered-item">3. Loser's Bracket #1 / Most Points Regular Season / Best Regular Season Record (Tiebreaker: 3rd most points scored in playoffs)</span>
              <span class="ordered-item">4-8. Loser's Bracket #2-6 (as applicable)</span>
              <span class="ordered-item">9-12. Winner's Bracket #2-6 (as applicable)</span>
            `,
            tags: []
          }),
          build(Rule, {
            content: `
            <div class="heading">Draft Order</div>
            <span class="ordered-item">1-5. Winner's Bracket #2-6</span>
            <span class="ordered-item">6-11. Loser's Bracket #2-6</span>
            <span class="ordered-item">12. Champion</span>
          `,
            tags: []
          }),
          build(Rule, {
            heading: 'Player Protections',
            content: `
            <span class="ordered-item"><b>1. <u>Unrestricted Free Agents:</u></b> Can be drafted at any time by any team.</span>
            <span class="ordered-item"><b>2. <u>Restricted Free Agents:</u></b> Can be drafted at any time by any team before or during the round in which the player was protected.
             After that round, the player can only be drafted by teams with season head-to-head victories over the protecting team.</span>
            <span class="ordered-item"><b>3. <u>Franchise Tags</u></b> (max 1 per team):
              Can only be stolen before or during the protected round by teams with season head-to-head victories over the protecting team 
              AND a higher season-long ranking AND more total points scored for the season AND more total points scored for the playoffs.
              The first year a player is given the franchise tag, owners use the round that player was drafted in the previous year to draft the player for the upcoming year
              (thereby freeing up earlier rounds for other picks). After the first year, the franchise tag must be drafted in the first round.</span>
            <span class="ordered-item"><b>4. <u>Mid-level Exceptions</u></b> (max 1 per team):
              Can only be stolen before or during the protected round by teams with season head-to-head victories over the protecting team AND a higher season-long ranking.
              The first year a player is given the mid-level exception, owners use the round that player was drafted in the previous year to draft the player for the upcoming year
              (thereby freeing up earlier rounds for other picks). After the first year, the mid-level exception must be drafted in the second round.</span></span>
            <span class="ordered-item"><b>5. <u>Rookie Deal Players</u></b> (max 1 per year per team, max 3 total per team):</span> 
              Can only be stolen before or during the protected round by teams with season head-to-head victories over the protecting team. 
              Owners can use the last (14th) round of the draft to draft first year players, but must draft second and third year players in the round they were protected in the previous year.`,
            tags: []
          }),
        ]
      },
      {
        title: 'Glossary',
        rules: [
          build(Rule, {
            heading: 'FPPG',
            content: 'Fantasy Points Per Game'
          }),
          build(Rule, {
            heading: 'Season Head-to-Head Victory',
            content: `A season head-to-head victory is achieved over another team in the league if you have beat that team in your season series (including playoff matchups).
              The tiebreaker is total points scored in the season series.`
          }),
          build(Rule, {
            heading: 'Season-long Ranking',
            content: 'Place team has finished in the final standings at the end of the season (after the playoffs)'
          }),
          build(Rule, {
            heading: 'Total points for the season',
            content: 'Total fantasy points scored over the span of all matchups in the season (including playoff matchups)'
          }),
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
