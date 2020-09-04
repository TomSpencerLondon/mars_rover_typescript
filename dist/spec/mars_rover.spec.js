"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mars_rover_1 = require("../mars_rover");
describe('Mars Rover', function () {
    [
        { facing: 'N', endsFacing: 'E' },
        { facing: 'E', endsFacing: 'S' }
    ].forEach(function (_a) {
        var facing = _a.facing, endsFacing = _a.endsFacing;
        it('turns right from N to E', function () {
            var rover = { facing: facing };
            rover = mars_rover_1.go(endsFacing, rover);
            expect(rover.facing).toBe(endsFacing);
        });
    });
    it('turns right from S to W', function () {
        var rover = { facing: 'S' };
        rover = mars_rover_1.go('R', rover);
        expect(rover.facing).toBe('W');
    });
    it('turns from W back to N', function () {
        var rover = { facing: 'W' };
        rover = mars_rover_1.go('R', rover);
        expect(rover.facing).toBe('N');
    });
});
//# sourceMappingURL=mars_rover.spec.js.map