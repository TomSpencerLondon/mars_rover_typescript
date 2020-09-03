"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.go = void 0;
exports.go = function (command, rover) {
    if (rover.facing == 'N') {
        return __assign(__assign({}, rover), { facing: 'E' });
    }
    return __assign(__assign({}, rover), { facing: 'S' });
};
//# sourceMappingURL=mars_rover.js.map