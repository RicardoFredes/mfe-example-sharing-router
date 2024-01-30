const hasObjectsDiff = (obj1 = {}, obj2 = {}) => {
  for (const key of Object.keys({ ...obj1, ...obj2 })) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) return true;
  }
  return false;
};

const hasRoutesDiff = (route1, route2) => {
  const diffPaths = () => route1.path !== route2.path;
  const diffHash = () => route1.hash !== route2.hash;
  const diffQuery = () => hasObjectsDiff(route1.query, route2.query);
  return diffPaths() || diffHash() || diffQuery();
};

const parseLocation = (location) => {
  location = typeof location === "string" ? { path: location } : location;

  if (!location.query) location.query = {};

  const [path, search] = location.path.split("?");

  if (search) {
    location.path = path;

    for (const param of search.split("&")) {
      const [key, value = ""] = param.split("=");
      if (key) location.query[key] = value;
    }
  }

  location.query._replace = true;

  return location;
};

const extendsRouter = (router) => {
  const originalRouterReplace = router.replace;
  router.replace = function (location, onComplete, onAbort) {
    originalRouterReplace.call(
      router,
      parseLocation(location),
      onComplete,
      onAbort
    );
  };
};

const VueRouterService = {
  hasRoutesDiff,
  extendsRouter,
};

export default VueRouterService;
