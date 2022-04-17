import React from 'react';
import google from "./images/google.png";
import github from "./images/github.png";
import facebook from "./images/facebook.png";

const SocialLogin = () => {
    return (
        <div>
            <button className="btn btn-warning mx-2"><img style={{ height: "30px", width: "30px" }} src={google} alt="Google Login" /> Google</button>
            <button className="btn btn-warning mx-2"><img style={{ height: "30px", width: "30px" }} src={github} alt="Github Login" /> Github</button>
            <button className="btn btn-warning mx-2"><img style={{ height: "30px", width: "30px" }} src={facebook} alt="Facebook Login" /> Facebook</button>
        </div>
    );
};

export default SocialLogin;