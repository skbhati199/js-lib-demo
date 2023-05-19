"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pluck = void 0;
var Pluck = function (elements, field) {
    return elements.map(function (element) { return element[field]; });
};
exports.Pluck = Pluck;
