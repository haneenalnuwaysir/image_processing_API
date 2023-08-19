"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoute_1 = __importDefault(require("./routers/indexRoute"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', indexRoute_1.default);
app.get('/', (req, res) => {
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
