"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fileExists_1 = require("./fileExists");
function processing(filename, width, height, format) {
    //get file format
    var fileFormat = format ? "." + format : ".jpeg";
    //resolve original image file path
    var fullFileLoc = path_1.default.resolve(__dirname + "../../../images/full/" + filename + ".jpeg");
    //resolve thumb image file path
    var thumbFileLoc = path_1.default.resolve(__dirname +
        "../../../images/thumb/" +
        filename +
        "_" +
        width +
        "_" +
        height +
        fileFormat);
    //while thumb image file does not exist, process image
    while (!(0, fileExists_1.fileExists)(thumbFileLoc)) {
        (0, sharp_1.default)(fullFileLoc)
            .resize({ width: width, height: height })
            .toFile(thumbFileLoc, function (err) {
            if (err) {
                console.log("error: ", err);
            }
        });
    }
    return (0, sharp_1.default)(thumbFileLoc).toBuffer();
}
exports.default = processing;
