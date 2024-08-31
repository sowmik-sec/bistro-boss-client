import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

function SocialLogin() {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((result) => {
          console.log(result.data);
          navigate("/");
        });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="px-8">
      <div className="divider"></div>
      <button onClick={handleGoogleSignIn} className="btn mr-4">
        <FaGoogle />
        Google
      </button>
    </div>
  );
}

export default SocialLogin;
