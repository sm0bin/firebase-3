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
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Open drawer
          </label>
          <label
            htmlFor="my-drawer-4"
            tabIndex={0}
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src="https://images.pexels.com/photos/18399245/pexels-photo-18399245/free-photo-of-brunette-woman-posing-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </label>
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
              <a>{user.email}</a>
            </li>
            <li>
              <a>{user.name}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Root;
