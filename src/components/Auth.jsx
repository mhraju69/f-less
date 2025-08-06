import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaLock } from 'react-icons/fa';
import "./css/auth.css"

export default function Auth() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get('code'); // get code from URL
        if (code) {
            localStorage.setItem('code', code); // store it in localStorage
            navigate("/airdrop"); // navigate to /airdrop page
        } else {
            console.log("No code found");
        }
    }, [searchParams, navigate]);


    const handleGoogleLogin = () => {
        const googleClientId = "530629707297-nsgqfita3i3vi1ee0flgr48f552t20hd.apps.googleusercontent.com";
        const redirectUri = "https://mhraju69.github.io/f-less/#/airdrop/auth"; // <-- make sure this matches Google's OAuth setting
        const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";

        const authUrl = `${baseUrl}?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;

        window.location.href = authUrl;
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="logo-container">
                    <div className="logo-text">Log In</div>
                    {/* <div className="tagline">Just one more step</div> */}
                </div>

                <div className="auth-header">
                    {/* <FaLock className="lock-icon" /> */}
                    <h2 className="auth-title">Just one more step</h2>
                    <p className="auth-subtitle">Join with Google to join airdrop</p>
                </div>

                <button
                    className="google-button"
                    onClick={handleGoogleLogin}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <FaGoogle className="google-icon" />
                    <span>Continue with Google</span>
                </button>

                <div className="footer">
                    <p className="footer-text">By continuing, you agree to our Terms of Service</p>
                </div>
            </div>
        </div>
    )
}