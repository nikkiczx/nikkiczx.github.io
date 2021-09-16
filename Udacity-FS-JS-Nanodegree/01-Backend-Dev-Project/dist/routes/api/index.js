"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var checking_1 = require("../../utilities/checking");
var routes = express_1.default.Router();
//call checking middleware
routes.get("/", checking_1.checking, function (req, res) {
    res.send("Options: filename, width, height, format");
});
exports.default = routes;
