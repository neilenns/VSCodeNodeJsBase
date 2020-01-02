const commander = require("commander");
const chalk = require("chalk");

function SetupCommandLineOptions() {
  // For information on how to configure command line arguments see
  // https://www.npmjs.com/package/commander
  commander.option("-d, --debug", "output debugging information");
}

function hello(compiler: string) {
  console.log(`Hello from ${chalk.blue(compiler)}`);
}

SetupCommandLineOptions();
commander.parse(process.argv);

hello("TypeScript");
