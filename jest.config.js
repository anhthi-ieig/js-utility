module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/**/__tests__/**/*.test.ts"],
  moduleDirectories: ["node_modules"],
  collectCoverageFrom: ["**/*.ts"],
};
