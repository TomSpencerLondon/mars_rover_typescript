import { go } from '../mars_rover';

describe('Mars Rover', () => {
  [
    {facing: 'N', endsFacing: 'E'},
    {facing: 'E', endsFacing: 'S'}
  ].forEach(({facing, endsFacing}) => {
    it('turns right from N to E', () => {
      let rover = {facing: facing};
      rover = go(endsFacing, rover);
      expect(rover.facing).toBe(endsFacing);
    });
  })

  it('turns right from S to W', () => {
    let rover = {facing: 'S'};
    rover = go('R', rover);
    expect(rover.facing).toBe('W');
  })

  it('turns from W back to N', () => {
    let rover = {facing: 'W'};
    rover = go('R', rover);
    expect(rover.facing).toBe('N');
  })
});
