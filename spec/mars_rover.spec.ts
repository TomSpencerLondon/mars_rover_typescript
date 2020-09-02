import { go } from '../mars_rover';

describe('Mars Rover', () => {
  it('turns right from N to E', () => {
    let rover = {facing: 'N'};
    rover = go('R');
    expect(rover.facing).toBe('E');
  });
});