import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default function Hero() {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  return (
    <div className="hero min-h-[calc(100vh-5rem)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/14469414/pexels-photo-14469414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
