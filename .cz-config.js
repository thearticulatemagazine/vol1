module.exports = {
  types: [
    { value: "layout", name: "layout: Hugo template related changes." },
    { value: "docs", name: "docs:     Documentation only changes" },
    {
      value: "static",
      name: "static:    Changes to static assets -CSS,JS,SVGs",
    },
    {
      value: "chore",
      name: "chore:    Auxillary file changes - Gitignore, Helper scripts",
    },
    { value: "CONFIG", name: "config:   Site level config changes" },
    { value: "content", name: "content:	Posts, Authors etc" },
  ],

  scopes: [
    { name: "dev" },
    { name: "chief-editor" },
    { name: "editor" },
    { name: "other" },
  ],

  usePreparedCommit: false,
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote who is making the changes:",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },

  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["customScope", "breaking", "footer"],
  typePrefix: "[",
  typeSuffix: "]",

  subjectLimit: 100,
};
