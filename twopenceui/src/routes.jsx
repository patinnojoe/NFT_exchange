import { Navigate, createBrowserRouter } from "react-router-dom";
import { DefaultLayout, GuestLayout } from "./layouts";
import { Dashboard, Login, Register } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />,
            },

            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/guest",
        element: <GuestLayout />,
        // children: [
        //     {
        //         path: "/guest/login",
        //         element: <Login />,
        //     },

        //     {
        //         path: "/guest/signin",
        //         element: <Login />,
        //     },

        //     {
        //         path: "/guest/signup",
        //         element: <Register />,
        //     },
        //     {
        //         path: "/guest/register",
        //         element: <Register />,
        //     },
        // ],
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

export default router;
