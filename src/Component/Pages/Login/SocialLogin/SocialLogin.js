import React from "react";
import { FaGoogle } from "react-icons/fa";
import {
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";

const SocialLogin = () => {
  // sign in with google
  const [signInWithGoogle] = useSignInWithGoogle(auth);


  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // handle sign in with google btn
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate(from, { replace: true });
  };


  return (
    <div className="d-block">
      <button
        onClick={handleSignInWithGoogle}
        className="d-block w-100 mt-3 py-2  rounded-pill"
      >
        <FaGoogle /> Google Sign In
      </button>

    </div>
  );
};

export default SocialLogin;
