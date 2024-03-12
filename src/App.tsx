import { RouterProvider } from "react-router-dom";

import appRouter from "./navigation/AppNavigator";

function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
