const toPathname = ({ path, query, hash, params }) => {
  const value = new URLSearchParams(query).toString();
  const search = value ? `?${value}` : "";
  return `${path}${search}`;
};

const toLocation = (pathname) => {
  const location = {
    path: pathname,
    query: {},
  };

  const [path, search] = pathname.split("?");

  if (search) {
    location.path = path;

    for (const param of search.split("&")) {
      const [key, value = ""] = param.split("=");
      if (key) location.query[key] = value;
    }
  }

  return location;
};

const ReactRouterService = {
  toPathname,
  toLocation
};

export default ReactRouterService