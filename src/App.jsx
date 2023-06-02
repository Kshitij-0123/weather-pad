import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChartPage from "./Pages/ChartPage";
import MapPage from "./Pages/MapPage";
import HomePageB from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import store from "./Store/index";
import Root from "./Pages/_rootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePageB />,
      },
      {
        path: "/Chart",
        element: <ChartPage />,
      },
      {
        path: "/Map",
        element: <MapPage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
