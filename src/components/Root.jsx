import { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Root = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>{user?.email}</a>
            </li>
            <li>
              <a>{user?.name}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Root;
