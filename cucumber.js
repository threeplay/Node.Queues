let common = [
  'features/**/*.feature',
  '--require-module ts-node/register',
  '--require features.steps/**/*.ts',
  '--format progress-bar',
].join(' ');

module.exports = {
  default: common
};

