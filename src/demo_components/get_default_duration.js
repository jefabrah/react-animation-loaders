export default (loaderName) => {
  switch (loaderName) {
    case 'AMCDots':
      return 1.5;
    case 'Blotty':
      return 1.5;
    case 'Pulse':
      return 0.75;
    case 'GSpinner':
      return 4;
  
    default:
      break;
  }
}
