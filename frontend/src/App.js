import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/Home";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import './App.css';

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 6 }}>
              <Navbar />
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };
  

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      // Redirect to the login page if the user is not authenticated
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
