import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <img src={user.photoURL} alt="" />
      <h1>{user.displayName}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Profile;
