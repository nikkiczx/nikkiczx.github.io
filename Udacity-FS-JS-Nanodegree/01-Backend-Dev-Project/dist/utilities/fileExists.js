"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = void 0;
var fs_1 = require("fs");
function fileExists(fileLoc) {
    if ((0, fs_1.existsSync)(fileLoc)) {
        return true;
    }
    else {
        return false;
    }
}
exports.fileExists = fileExists;
