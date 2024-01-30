import { createRoot } from "react-dom/client";
import App from "./App";
import { makeRouter } from "./router";

let lastLocation = {};

export default ({ el, basename }) => {
  const app = createRoot(el);

  const router = makeRouter({ basename, disableHistory: true });
  app.render(<App router={router} />);

  const replace = (pathname) => {
    router.navigate(pathname, { state: { preventSync: true } });
    lastLocation = router.state.location;
  };

  const push = (pathname) => {
    router.navigate(pathname, { state: { preventSync: true } });
    lastLocation = router.state.location;
  };

  const beforeEach = (cb) => {
    const unsubscribe = router.subscribe((props) => {
      const { location, historyAction } = props;

      if (location?.state?.preventSync) return;

      const isSameLocation =
        lastLocation.pathname === location.pathname &&
        lastLocation.search === location.search;

      lastLocation = location;

      if (isSameLocation) return;

      const pathname = `${location.pathname}${location.search}`;
      const isReplace = historyAction === "REPLACE";
      cb({ pathname, isReplace });
    });

    return unsubscribe;
  };

  app.$destroy = () => app.unmount();

  app.$router = {
    mode: "abstract",
    replace,
    push,
    beforeEach,
  };

  return app;
};
