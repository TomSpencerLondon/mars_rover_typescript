"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mars_rover_1 = require("../mars_rover");
describe('Mars Rover', function () {
    it('turns right from N to E', function () {
        var rover = { facing: 'N' };
        rover = mars_rover_1.go('R');
        expect(rover.facing).toBe('E');
    });
});
//# sourceMappingURL=mars_rover.spec.js.map