import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChartPage from "./Pages/ChartPage";

// import HomePage from "./Pages/HomePage";
import store from "./Store/index";
import HomePageB from "./Pages/HomePage";
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
        path: "/Chart",
        element: <ChartPage />,
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
