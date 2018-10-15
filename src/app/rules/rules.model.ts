export class Rule {
    date: Date = new Date();
    content = '';
    heading = '';
    tags: string[] = [];
}

export class RulesSection {
    title = '';
    rules: Rule[] = [];
}
