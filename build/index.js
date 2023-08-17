"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoute_1 = __importDefault(require("./routers/indexRoute"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("./sharp"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', indexRoute_1.default);
app.use('./images/full', express_1.default.static(path_1.default.join(__dirname, 'full')));
app.use('./images/thumbnail', express_1.default.static(path_1.default.join(__dirname, 'thumbnail')));
app.get('/resize', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = './images/full/palmtunnel.jpg';
    let width = parseInt(req.query.width);
    let height = parseInt(req.query.height);
    try {
        const buffer = yield (0, sharp_1.default)(url, width, height);
        res.set('Content-Type', 'image/jpeg');
        res.send(buffer);
    }
    catch (error) {
        console.error(error);
        res.status(200).send('Internal server error');
    }
}));
// start the express server
app.listen(port, () => {
    console.log(`server started at localhost:${port}/`);
    // console.log(`server started at localhost:${port}/resize?images/palmtunnel&width=500&height=500`);
});
