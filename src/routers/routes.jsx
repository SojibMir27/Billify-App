import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import MyPayBills from "../pages/MyPayBills";
import PrivateRoute from "./PrivetRoute";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import AddBill from "../pages/AddBill";
import PayBill from "../pages/PayBill";
import MyPayBillDetails from "../pages/MyPayBillDetails";
import UpdateBill from "../pages/UpdateBill";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <p>Loading........</p>,
    children: [
      {
        index: true,
        element: <Home />,
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
      },
      {
        path: "/bill-details/:id",
        element: (
          <PrivateRoute>
            <BillDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-bill",
        element: (
          <PrivateRoute>
            <AddBill />
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
