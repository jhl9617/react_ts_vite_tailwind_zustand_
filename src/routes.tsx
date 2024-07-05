import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BasicLayout from "./component/layouts/BasicLayout";
import LoginLayout from "./component/layouts/LoginLayout";
import Login from "./component/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<BasicLayout />}>
        <Route path="/usermanager" element={<div>User Manager</div>} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
);

export default router;
