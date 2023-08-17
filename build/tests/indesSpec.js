"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// it('Should expect original image to exist', () => {
//   expect(fs.existsSync('./images/originalImage/palmtunnel.jpg')).toBeTruthy();
// });
// it('Should expect modified image to exist', () => {
//   expect(fs.existsSync('./images/modifiedImage/palmtunnel_modified.jpg')).toBeTruthy();
// });
it('Should expect original image to exist', (done) => {
    fs_1.default.access('./images/originalImage/palmtunnel.jpg', (err) => {
        expect(err).toBeNull();
        done();
    });
});
it('Should expect modified image to exist', (done) => {
    fs_1.default.access('./images/modifiedImage/palmtunnel_modified.jpg', (err) => {
        expect(err).toBeNull();
        done();
    });
});
