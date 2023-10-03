import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const { loginUser, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/table");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-[calc(100vh-5rem)] bg-base-200">
      <div className="hero-content flex-col max-w-lg w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className=" w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
              <button className="btn btn-ghost" onClick={handleGoogleLogin}>
                <BsGoogle className="text-2xl" />
              </button>
            </div>
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/sign-up">
                <button className="btn btn-link">Sign Up</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
