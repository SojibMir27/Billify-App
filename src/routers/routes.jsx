import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import MyPayBills from "../pages/MyPayBills";
import PrivateRoute from "./PrivetRoute";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import PayBill from "../pages/PayBill";
import MyPayBillDetails from "../pages/MyPayBillDetails";
import UpdateBill from "../pages/UpdateBill";
import About from "../pages/About";
import DisplayBillCard from "../pages/DisplayBillCard";
import Spinner from "../pages/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/bills",
        element: <Bills />,
        loader: () => fetch("http://localhost:5000/bills"),
      },
      {
        path: "/bill-details/:id",
        element: (
          <PrivateRoute>
            <BillDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bills/${params.id}`),
      },
      {
        path: "/display-bill-card",
        element: (
          <PrivateRoute>
            <DisplayBillCard />
          </PrivateRoute>
        ),
      },
      {
        path: "/pay-bill",
        element: (
          <PrivateRoute>
            <PayBill />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-pay-bills",
        element: (
          <PrivateRoute>
            <MyPayBills />
          </PrivateRoute>
        ),
      },
      {
        path: "/mypay-bills-details/:id",
        element: (
          <PrivateRoute>
            <MyPayBillDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-bills/${params.id}`),
      },
      {
        path: "/my-bill-update/:id",
        element: (
          <PrivateRoute>
            <UpdateBill />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
