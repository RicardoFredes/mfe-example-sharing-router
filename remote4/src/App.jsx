import { RouterProvider } from "react-router-dom";
import { makeRouter } from "./router";

const App = (props) => {
  const router = props?.router || makeRouter(props);

  return (
    <main id="remote4">
      <h2>Remote 4</h2>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
