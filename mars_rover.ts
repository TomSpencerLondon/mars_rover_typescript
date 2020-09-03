export const go = (command: string, rover: {facing}) => {
  const compass = ['N', 'E', 'S', 'W'];
  return {...rover, facing: compass[(compass.indexOf(rover.facing) + 1) % 4]}

  if (rover.facing == 'N'){
    return {...rover, facing: 'E'};
  }else if(rover.facing == 'E'){
    return {...rover, facing: 'S'};
  }

  return {...rover, facing: 'W'};
}
