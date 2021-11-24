module.exports = {
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(vue)$": "@vue/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  "transformIgnorePatterns": ['/node_modules/'],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  // "snapshotSerializers": [
  //   "jest-serializer-vue"
  // ],
  "testMatch": [
    "<rootDir>/__tests__/**/*.spec.js"
  ],
  "testURL": "http://localhost/",
  "collectCoverage": true,
  "coverageProvider": "v8",
  "collectCoverageFrom": [
    "src/**/*.vue",
    "!src/main.js",
    "!src/App.vue"
  ]
}
