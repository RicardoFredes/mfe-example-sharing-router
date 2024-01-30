import Home from "./components/Home";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import Page from "./components/Page";

export const routes = [
  { path: "/", element: <Navigation /> },
  {
    path: "/remote4",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/remote4/page",
        element: <Page />,
      },
    ],
  },
];
