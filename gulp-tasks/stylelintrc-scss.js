"use strict"

module.exports = {
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    /* @ Regras */
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": "^[A-Za-z0-9_-]+$",
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/declaration-nested-properties-no-divided-groups": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,

    /* Strings */
    "string-no-newline": true,

    /* @ Rules */
    "at-rule-blacklist": ["extend", "while"],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "at-rule-name-space-after": "always",
    /* Blocks */
    "block-closing-brace-newline-after": [
      "always", {
        "ignoreAtRules": ["if", "else"]
      }
    ],
    "block-closing-brace-newline-before": "always-multi-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always"
  }
}

