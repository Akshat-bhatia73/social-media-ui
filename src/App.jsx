import React, { Children, useState } from "react";
import { Home, Login, Profile, Register } from "./pages";
import { Navbar, Leftbar, Rightbar } from "./components";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const currentUser = true

  const Layout = () => {
    return (
      <div className="">
        <Navbar />
        <div className="" style={{ display: "flex" }}>
          <Leftbar />
          <div className="" style={{ flex: '6', }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
