import { go } from '../mars_rover';

describe('Mars Rover', () => {
  it('turns right from N to E', () => {
    let rover = {facing: 'N'};
    rover = go('R', rover);
    expect(rover.facing).toBe('E');
  });

  it('turns right from E to S', () => {
    let rover = {facing: 'E'};
    rover = go('R', rover);
    expect(rover.facing).toBe('S');
  });

  it('turns right from S to W', () => {
    let rover = {facing: 'S'};
    rover = go('R', rover);
    expect(rover.facing).toBe('W');
  })
});
