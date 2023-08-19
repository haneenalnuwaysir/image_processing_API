"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const middleware_1 = __importDefault(require("../middleware"));
const route = express_1.default.Router();
route.get('/images', middleware_1.default, (req, res) => {
    const { filename, width, height } = req.query;
    const imageFilepath = path_1.default.join(__dirname, '../../images/thumbnail', `${filename}-${width}-${height}.jpg`);
    res.sendFile(imageFilepath);
    // res.send('Main api route ');
});
exports.default = route;
