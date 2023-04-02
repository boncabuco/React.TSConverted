import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Home from "./components/Home";
import React from 'react';
import ReferentialPage from "./pages/ReferentialPage";

interface Route {
  index?: boolean,
  path?: string,
  element: React.ReactNode
}

const AppRoutes: Route[] = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/referentials',
    element: <ReferentialPage />
  }
];

export default AppRoutes;
