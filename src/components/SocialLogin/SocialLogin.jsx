import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

function SocialLogin() {
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
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
