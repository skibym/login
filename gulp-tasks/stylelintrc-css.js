"use strict"

module.exports = {
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    /* Colors */
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,

    /* Fonts */
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-weight-notation": "numeric",

    /* Functions */
    "function-blacklist": [],
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "always-multi-line",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-url-scheme-whitelist": ["https", "http", "data"],
    "function-whitespace-after": "always",

    /* Numbers */
    "number-leading-zero": "always",
    "number-max-precision": 4,
    "number-no-trailing-zeros": true,

    /* Strings */
    "string-no-newline": true,
    "string-quotes": "double",
    "length-zero-no-unit": true,

    /* Time */
    "time-min-milliseconds": 150,

    /* Units */
    "unit-case": "lower",
    "unit-no-unknown": true,

    /* Value */
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,

    /* Values */
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,

    /* Short hand */
    "shorthand-property-no-redundant-values": true,

    /* Properties */
    "property-case": "lower",
    "property-no-unknown": true,

    /* Keyframe declaration */
    "keyframe-declaration-no-important": true,

    /* Declarations */
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,

    /* Declaration block */
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",

    /* Blocks */
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": [
      "always", {
        "ignoreAtRules": ["if", "else"]
      }
    ],
    "block-closing-brace-newline-before": "always-multi-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    /* Selectors */
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-class-pattern": "^(exp-|is-|has-)[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?(?:\\[.+\\])?$",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-max-compound-selectors": 3,
    "selector-max-specificity": "0,2,0",
    "selector-no-id": true,
    "selector-no-qualifying-type": true,
    "selector-no-type": true,
    "selector-no-universal": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "selector-max-empty-lines": 0,

    /* Selector list */
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",

    /* Rules */
    "rule-empty-line-before": ["always-multi-line",
      {
        except: [
          "first-nested",
          "after-single-line-comment"
        ],
        ignore: ["after-comment"],
      }],

    /* Media Queries */
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    /* Media query list */
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",

    /* @ Rules */
    "at-rule-blacklist": ["extend", "while"],
    "at-rule-empty-line-before": ["always",
      {
        except: [
          "blockless-after-same-name-blockless",
          "first-nested",
        ],
        ignore: ["after-comment"],
      }],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",

    /* Comments */
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",

    /* General */
    "indentation": 2,
    "max-empty-lines": 1,
    "max-nesting-depth": 2,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    /* Properties Order */
    "order/properties-order": [
      /* Positioning */
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      /* Box Model */
      "display",
      "float",
      "width",
      "height",
      "max-width",
      "max-height",
      "min-width",
      "min-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-collapse",
      "margin-top-collapse",
      "margin-right-collapse",
      "margin-bottom-collapse",
      "margin-left-collapse",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "clear",
      /* Typography */
      "font",
      "font-family",
      "font-size",
      "font-smoothing",
      "osx-font-smoothing",
      "font-weight",
      "hyphens",
      "src",
      "line-height",
      "letter-spacing",
      "word-spacing",
      "color",
      "font-style",
      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-size-adjust",
      "text-shadow",
      "text-transform",
      "word-break",
      "word-wrap",
      "white-space",
      "vertical-align",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      /* Visual */
      "pointer-events",
      "cursor",
      "background",
      "background-attachment",
      "background-color",
      "background-image",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-collapse",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-color",
      "border-image",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-spacing",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "border-radius-topright",
      "border-radius-bottomright",
      "border-radius-bottomleft",
      "border-radius-topleft",
      "content",
      "quotes",
      "outline",
      "outline-offset",
      /* Miscellaneous */
      "opacity",
      "filter",
      "visibility",
      "size",
      "zoom",
      "transform",
      "box-align",
      "box-flex",
      "box-orient",
      "box-pack",
      "box-shadow",
      "box-sizing",
      "table-layout",
      "animation",
      "animation-delay",
      "animation-duration",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "animation-fill-mode",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "background-clip",
      "backface-visibility",
      "resize",
      "appearance",
      "user-select",
      "interpolation-mode",
      "direction",
      "marks",
      "page",
      "set-link-source",
      "unicode-bidi",
      "speak"
    ]

  }
}
