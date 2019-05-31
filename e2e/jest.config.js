const commonConfig = require('@stardust-ui/internal-tooling/jest')

module.exports = {
  ...commonConfig,
  name: 'e2e',
  testRegex: '.*-test\\.tsx?$',
  setupFilesAfterEnv: ['./setup.test.ts'],
}
