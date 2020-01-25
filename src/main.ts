import commander from "commander";
import chalk from "chalk";
import moment from "moment";
import npmPackageInfo from "../package.json";

function SetupCommandLineOptions() {
  // For information on how to configure command line arguments see
  // https://www.npmjs.com/package/commander
  commander.option("-d, --debug", "output debugging information");
  commander.version(npmPackageInfo.version);
  commander.parse(process.argv);
}

function ProcessRow(data: any) {
}

function main() {
  SetupCommandLineOptions();
  processCsv("dist/test.csv", ProcessRow);
}

main();
