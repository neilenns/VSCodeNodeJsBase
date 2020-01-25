import chalk from "chalk";
import csv from "csv-parser";
import fs from "fs";
import _ from "lodash";

type CsvDataCallback = (chunk: any) => void;

const requiredHeaders = ["PartnerAssetId", "Uri"];

function validateHeaders(headers: string[]) {
  const missingHeaders = _.difference(requiredHeaders, headers);

  if (missingHeaders.length > 0) {
    throw new Error(`Missing required headers: ${missingHeaders}`);
  }
}

function handleStreamError(error: Error) {
  console.log(chalk.red(error.message));
}

function processCsv(filename: string, callback: CsvDataCallback) {
  fs.createReadStream(filename)
    .on("error", error => handleStreamError(error))
    .pipe(csv())
    .on("headers", headers => validateHeaders(headers))
    .on("error", error => handleStreamError(error))
    .on("data", data => callback(data))
    .on("error", error => handleStreamError(error));
}

export default processCsv;
