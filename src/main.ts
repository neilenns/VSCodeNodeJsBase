import chalk from "chalk";
import commander from "commander";
import moment from "moment";
import npmPackageInfo from "../package.json";
import processCsv from "./csvParser";

function SetupCommandLineOptions() {
  // For information on how to configure command line arguments see
  // https://www.npmjs.com/package/commander
  commander.option("-d, --debug", "output debugging information");
  commander.version(npmPackageInfo.version);
  commander.parse(process.argv);
}

function ProcessRow(data: any) {
  console.log("Do something");
}

function main() {
  SetupCommandLineOptions();
  processCsv("dist/test.csv", ProcessRow);
}

main();
