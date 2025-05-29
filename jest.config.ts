export default {
  rootDir: "src",
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: String.raw`.*\.test\.ts$`,
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
};
