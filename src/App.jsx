import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchVideoPage from "./components/WatchVideoPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideoPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
      <Body />
    </Provider>
  );
}

export default App;
