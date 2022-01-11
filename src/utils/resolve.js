export const resolve = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`;
};
