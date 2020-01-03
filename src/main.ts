import commander from "commander";
import chalk from "chalk";
import moment from "moment";

function SetupCommandLineOptions() {
  // For information on how to configure command line arguments see
  // https://www.npmjs.com/package/commander
  commander.option("-d, --debug", "output debugging information");
}

function hello(compiler: string) {
  console.log(`Hello from ${chalk.blue(compiler)}`);
  console.log(
    moment()
      .startOf("day")
      .fromNow()
  );
}

SetupCommandLineOptions();
commander.parse(process.argv);

hello("TypeScript");
