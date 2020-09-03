export const go = (command: string, rover: {facing}) => {
  if (rover.facing == 'N'){
    return {...rover, facing: 'E'};
  }

  return {...rover, facing: 'S'};
}
