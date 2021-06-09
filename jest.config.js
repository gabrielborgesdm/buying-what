const compilerOptions = require("./tsconfig.json");
const pathsToModuleNameMapper = require("ts-jest/utils");
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
 
module.exports = {

  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" }),

  preset: 'ts-jest',
};
