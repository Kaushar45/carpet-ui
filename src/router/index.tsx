import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import App from "../App";
import { ProtectedRoute, AuthRoute } from "../components/ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Shop = lazy(() => import("../pages/Shop"));
const NotFound = lazy(() => import("../NotFound"));
const Signup = lazy(() => import("../auth/Signup"));
const Login = lazy(() => import("../auth/Login"));
const ForgotPassword = lazy(() => import("../auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../auth/ResetPassword"));
const Profile = lazy(() => import("../pages/Profile"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Wishlist = lazy(() => import("../pages/Wishlist"));

// Loader component for suspense fallback
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-teal-950 text-amber-400">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-400 border-t-transparent"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "shop",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Wishlist />
          </Suspense>
        ),
      },

      // Auth routes (cannot access if already logged in)
      {
        element: <AuthRoute />,
        children: [
          {
            path: "signup",
            element: (
              <Suspense fallback={<PageLoader />}>
                <Signup />
              </Suspense>
            ),
          },
          {
            path: "login",
            element: (
              <Suspense fallback={<PageLoader />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: "forgot-password",
            element: (
              <Suspense fallback={<PageLoader />}>
                <ForgotPassword />
              </Suspense>
            ),
          },
          {
            path: "reset-password",
            element: (
              <Suspense fallback={<PageLoader />}>
                <ResetPassword />
              </Suspense>
            ),
          },
        ]
      },
      // Protected routes (must be logged in to access)
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<PageLoader />}>
                <Profile />
              </Suspense>
            ),
          },
        ]
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
