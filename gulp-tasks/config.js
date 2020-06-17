var autoprefixer = require('autoprefixer');

/** Configuração das tarefas */
var config = {
  sass: {
    source: "src/sass/**/*.scss",
    compileOptions: {
      outputStyle: "expanded"
    },
    buildDestination: "src/css",
    sassdocOptions: {
      publishTo: "//10.2.0.4/explend-sass-docs",
      publishFrom: "./docs/**/*.*",
      dest: "./docs"
    },
    sassThemesOptions: {
      source: "src/sass/themes/_*.scss"
    },
  },
  postcssPlugins: [
    autoprefixer()
  ],

  sourcemaps: {
    destination: "./"
  },

  cssStylelintOptions: {
    source: ["src/css/*.css"],
    configFile: "./gulp-tasks/stylelintrc-css.js",
    outputDir: './',
    reporters: [
      {
        formatter: "verbose", save: "reports/stylelint-css-report.txt"
      }
    ],
    debug: true
  },

  scssStylelintOptions: {
    source: ["src/sass/**/*.scss", "!src/sass/main.themed.scss"],
    configFile: "./gulp-tasks/stylelintrc-scss.js",
    outputDir: './',
    reporters: [
      {
        formatter: "verbose", save: "reports/stylelint-scss-report.txt"
      }
    ],
    debug: true
  },

  htmllintOptions: {
    source: ["src/**/*.html"],
    reportOutputFile: "./reports/htmllint-report.txt"
  },

  parkerOptions: {
    source: ["src/**/*.css"],
    file: "./reports/parker-report.txt",
    title: "Parker Report",
    metrics: [
      "TotalRules",
      "TotalStylesheets",
      "TotalStylesheetSize",
      "TotalSelectors",
      "TotalIdentifiers",
      "TotalDeclarations",
      "SelectorsPerRule",
      "IdentifiersPerSelector",
      "SpecificityPerSelector",
      "TopSelectorSpecificity",
      "TopSelectorSpecificitySelector",
      "TotalIdSelectors",
      "TotalUniqueColours",
      "UniqueColours",
      "TotalImportantKeywords",
      "TotalMediaQueries"
    ]
  },
  distOptions: {
    css: {
      source: ["./src/css/*.css"],
      destination: "./dist/css"
    },
    html: {
      source: ["./src/*.html"],
      destination: "./dist"
    },
    images: {
      source: ["./src/images/*.*"],
      destination: "./dist/images"
    }
  }

}

module.exports = config;
