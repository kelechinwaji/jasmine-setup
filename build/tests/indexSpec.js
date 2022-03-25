"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
describe('myFunc(5) should equal 25', () => {
    it('expect myFunc(5) to equal 25', () => {
        expect((0, __1.default)(5)).toEqual(25);
    });
});
