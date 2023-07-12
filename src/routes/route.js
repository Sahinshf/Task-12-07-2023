import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";

import Country from "../pages/Site/Country/Country";
import CountryDetail from "../pages/Site/CountryDetail/CountryDetail";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Country />,
      },
      {
        path: "detail/:name",
        element: <CountryDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [],
  },
];
