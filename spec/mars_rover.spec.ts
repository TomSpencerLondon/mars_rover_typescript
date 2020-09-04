import { go } from '../mars_rover';

describe('Mars Rover', () => {
  [
    {facing: 'N', endsFacing: 'E'},
    {facing: 'E', endsFacing: 'S'},
    {facing: 'S', endsFacing: 'W'},
    {facing: 'W', endsFacing: 'N'}
  ].forEach(({facing, endsFacing}) => {
    it('turns right from N to E', () => {
      let rover = {facing: facing};
      rover = go(endsFacing, rover);
      expect(rover.facing).toBe(endsFacing);
    });
  })

  it('turns from W back to N', () => {
    let rover = {facing: 'W'};
    rover = go('R', rover);
    expect(rover.facing).toBe('N');
  })
});
