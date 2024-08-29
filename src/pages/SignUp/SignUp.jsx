import { Link } from "react-router-dom";

function SignUp() {
  const handleSignup = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col md:flex-row">
        <div className="md:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="md:w-1/2 card bg-base-100 w-full max-w-sm  shadow-2xl">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input type="submit" value="Signup" className="btn btn-primary" />
            </div>
          </form>
          <p>
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
