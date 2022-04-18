import React from 'react';
import google from "./images/google.png";
import github from "./images/github.png";
import facebook from "./images/facebook.png";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    // redirect page
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // Handle Logins 
    const handleGoogle = () => {
        signInWithGoogle();
    }
    const handleGithub = () => {
        signInWithGithub();
    }
    const handleFacebook = () => {
        signInWithFacebook();
    }
    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error || error1 || error2) {
        errorElement = <p className='text-danger'>{error?.message || error2?.message || error1?.message}</p>
    }
    return (
        <div>
            {errorElement}
            <button onClick={handleGoogle} className="btn btn-warning mx-2"><img style={{ height: "30px", width: "30px" }} src={google} alt="Google Login" /> Google</button>
            <button onClick={handleGithub} className="btn btn-warning mx-2"><img style={{ height: "30px", width: "30px" }} src={github} alt="Github Login" /> Github</button>
            <button onClick={handleFacebook} className="btn btn-warning mx-2"><img style={{ height: "30px", width: "30px" }} src={facebook} alt="Facebook Login" /> Facebook</button>
        </div>
    );
};

export default SocialLogin;