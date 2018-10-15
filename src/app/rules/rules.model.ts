export class Rule {
    date: Date = new Date();
    content = '';
    tags: string[] = [];
}

export class RulesSection {
    title = '';
    rules: Rule[] = [];
}
