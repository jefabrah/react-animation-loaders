import loaders from './loader_info';

export default (loaderName) => {
  if (loaders[loaderName]) {
    if (loaders[loaderName].defaultDuration) {
      return loaders[loaderName].defaultDuration;
    }
    else {
      console.error(`loaders.${loaderName} does not have a valid duration`);
    }
  }
  else {
    console.error(`${loaderName} is not a valid property of loaders`);
  }
}
