import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";

export const makeRouter = ({ disableHistory } = {}) => {
  const createRouter = disableHistory
    ? createMemoryRouter
    : createBrowserRouter;
  return createRouter(routes);
};
