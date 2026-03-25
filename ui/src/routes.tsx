import {createBrowserRouter} from "react-router";
import Layout from "./components/Layout.tsx";
import {routes} from "./constants/routes.ts";
import Search from "./pages/Search/Search.tsx";
import Watchlist from "./pages/WatchList/Watchlist.tsx";

export const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <Layout />,
    children: [
      {
        path: routes.SearchPage,
        element: <Search />,
        index: true
      },
      {
        path: routes.WatchList,
        element: <Watchlist />,
      }
    ]
  },
  {
    path: "*",
    element: <Layout />
  }
]);