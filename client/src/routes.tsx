import { createBrowserRouter } from "react-router-dom";
import StartScreen from "./StartScreen";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartScreen />,
  },
  {
    path: "/game/:id",
    element: <App />,
  },
]);

export default router;
