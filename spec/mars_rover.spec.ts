import { right } from '../mars_rover';

describe('Mars Rover', () => {
  [
    {facing: 'N', endsFacing: 'E'},
    {facing: 'E', endsFacing: 'S'},
    {facing: 'S', endsFacing: 'W'},
    {facing: 'W', endsFacing: 'N'}
  ].forEach(({facing, endsFacing}) => {
    it(`turns right ${facing} to ${endsFacing}`, () => {
      let rover = {facing: facing};
      rover = right(endsFacing, rover);
      expect(rover.facing).toBe(endsFacing);
    });
  })

    [
      {facing: 'N', endsFacing: 'W'},
      {facing: 'W', endsFacing: 'S'},
      {facing: 'S', endsFacing: 'E'},
      {facing: 'E', endsFacing: 'N'}
    ].forEach(({facing, endsFacing}) => {
    it(`turns left ${facing} to ${endsFacing}`, () => {
      let rover = {facing: facing};
      rover = left(endsFacing, rover);
      expect(rover.facing).toBe(endsFacing);
    });
  })


  [
    {facing: 'N', x: 5, y: 6},
    {facing: 'N', x: 6, y: 5},
    {facing: 'N', x: 5, y: 4},
    {facing: 'N', x: 4, y: 5}
    ].forEach(({facing, x, y}) => {
    it(`moves forward to x: ${x} y: ${y} ${facing}`, () => {
      let rover = {facing: facing, position: {x: 5, y: 5}};
      rover = forward(rover);
      expect(rover.position).toBe({x: x, y: y});
    });


});


