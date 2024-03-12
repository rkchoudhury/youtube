import { createBrowserRouter } from "react-router-dom";

import { ROUTE_NAMES } from "./Routes";
import WatchVideo from "../screens/watchVideo/WatchVideo";
import MainContent from "../components/MainContent";
import Dashboard from "../screens/dashboard/Dashboard";

const appRouter = createBrowserRouter([
  {
    path: ROUTE_NAMES.HOME,
    element: <Dashboard />,
    children: [
      {
        path: ROUTE_NAMES.HOME,
        element: <MainContent />,
      },
      {
        path: ROUTE_NAMES.WATCH,
        element: <WatchVideo />,
      },
    ],
  },
]);

export default appRouter;
