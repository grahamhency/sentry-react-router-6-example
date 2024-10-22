import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Link,
  matchPath,
  matchRoutes,
  Outlet,
  RouteObject,
  RouterProvider,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Button } from '@mui/material';
import { AppTitle } from './components/AppTitle.tsx';
import { ParamPage } from './pages/ParamPage.tsx';
import { ParamDetailsPage } from './pages/ParamDetailsPage.tsx';
import { SuperParamDetailsPage } from './pages/SuperParamDetailsPage.tsx';
import {
  init,
  reactRouterV6BrowserTracingIntegration,
  wrapCreateBrowserRouter,
} from '@sentry/react';
import { OutletContainer } from './components/OutletContainer.tsx';
import App from './App.tsx';

const routes: RouteObject[] = [
  {
    path: '*',
    element: (
      <>
        <AppTitle>Home</AppTitle>
        <Navbar />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </>
    ),
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'profile',
        element: (
          <>
            <AppTitle>Profile</AppTitle>
            <Link to="..">
              <Button variant="contained">Back</Button>
            </Link>
          </>
        ),
      },
      {
        path: 'param-page',
        element: <Outlet />,
        children: [
          {
            path: '*',
            element: <Outlet />,
            children: [
              {
                path: ':id',
                element: <ParamPage />,
                children: [
                  {
                    element: <ParamDetailsPage />,
                    path: 'details',
                    children: [
                      {
                        element: <SuperParamDetailsPage />,
                        path: ':superId',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

init({
  environment: 'stage',
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    reactRouterV6BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
      matchPath,
    }),
  ],
  beforeSendTransaction: (e) => {
    const matched = matchRoutes(routes, location);
    console.log(
      e.transaction,
      matched?.map((m) => m.route.path),
    );
    return e;
  },
  tracesSampleRate: 1.0, // Capture 100% of the transactions
});

const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);
const router = sentryCreateBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
