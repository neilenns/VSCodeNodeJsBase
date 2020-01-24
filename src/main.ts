import commander from "commander";
import chalk from "chalk";
import moment from "moment";
import processCsv from "./csvParser";
import Job from "./marioJobClasses/job";
import { Action } from "./marioJobClasses/action";
import { AssetType } from "./marioJobClasses/assetType";

function SetupCommandLineOptions() {
  // For information on how to configure command line arguments see
  // https://www.npmjs.com/package/commander
  commander
    .option("--debug", "output debugging information")
    .option("--defaultAssetType [assetType]", "default asset type")
    .option("--defaultAction [action]", "default action");
  commander.parse(process.argv);
}

function ProcessRow(data: any) {
  var job = {
    action: data.action ?? commander.defaultAction ?? Action.Create,
    assets: [
      {
        assetType:
          data.assetType ?? commander.defaultAssetType ?? AssetType.Image,
        partnerAssetId: data.PartnerAssetId,
        uri: data.Uri
      }
    ],
    version: "1.0.0"
  } as Job;

  console.log(JSON.stringify(job));
}

function main() {
  SetupCommandLineOptions();
  processCsv("dist/test.csv", ProcessRow);
}

main();
