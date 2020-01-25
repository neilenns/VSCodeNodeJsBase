"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var chalk_1 = __importDefault(require("chalk"));
var moment_1 = __importDefault(require("moment"));
function SetupCommandLineOptions() {
    // For information on how to configure command line arguments see
    // https://www.npmjs.com/package/commander
    commander_1.default.option("-d, --debug", "output debugging information");
    commander_1.default.parse(process.argv);
}
function hello(compiler) {
    console.log("Hello from " + chalk_1.default.blue(compiler));
    console.log(moment_1.default()
        .startOf("day")
        .fromNow());
}
function main() {
    SetupCommandLineOptions();
    hello("TypeScript");
}
main();
//# sourceMappingURL=main.js.map