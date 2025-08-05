import React, { useState, useEffect, useRef } from 'react';
import './css/airdrop.css';
import Dashboard from './Dashboard.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AirdropPage = () => {
  const navigate = useNavigate()
  const [isComplited, setIsComplited] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState({});
  const [copied, setCopied] = useState(false);
  const access = localStorage.getItem('access')
  const [reffer, setReffer] = useState(false);
  const [referred_by, setReferred_by] = useState(false);
  const code = localStorage.getItem("code")
  const [input, setInput] = useState({
    twitter: '',
    retweet: '',
    telegram: '',
    wallet: ''
  });

  useEffect(() => {
    if (!code) {
      navigate("/airdrop/auth")
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referred_by = urlParams.get("reff");
    console.log('referred_by', referred_by)
    if (referred_by) {
      setReferred_by(referred_by);
    }
  }, []);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      if (step !== 0) return;
      try {
        const response = await axios.post(
          'https://mhraju0069.pythonanywhere.com/airdrop/auth/google/callback/',
          { code },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        console.log('response 1=', response);

        setUserData(prev => ({
          ...prev,
          email: response.data.email || '',
          name: response.data.name || '',
          image: response.data.image || ''
        }));

        const isComplited = response.data.isComplited;
        localStorage.setItem('access', response.data.access)
        setIsComplited(isComplited);
        setStep(1);
      } catch { console.error('Error checking auth status:', error); }
    }
    checkAuthStatus()
  })


  useEffect(() => {
    const updatedata = async () => {
      try {
        const response = await axios.get(
          'https://mhraju0069.pythonanywhere.com/airdrop/',
          {
            headers: {
              Authorization: `Bearer ${access}`,
              'Content-Type': 'application/json'
            }
          }
        );

        const data = response.data;
        console.log('data======', data);

        setUserData(prev => ({
          ...prev,
          ...data
        }));

        // ✅ Check if user has previous input data and set it
        setInput({
          twitter: data.twitter || '',
          retweet: data.retweet || '',
          telegram: data.telegram || '',
          wallet: data.wallet || ''
        });

      } catch (error) {
        console.error("❌ Error fetching user data:", error.response?.data || error.message);
      }
    };
    updatedata();
  }, [code]);


  // Handle input changes
  const handleInputChange = (field, value) => {
    setInput(prev => ({
      ...prev,
      [field]: value
    }));
  };


  // Handle form submission
  const handleSubmit = async () => {
    let response;  // ✅ Declare response here

    try {
      if (!isComplited) {
        try {
          response = await axios.patch(  // ✅ remove `const` here
            `https://mhraju0069.pythonanywhere.com/airdrop/${referred_by ? '?reff=' + referred_by + '/' : ''}`,
            input,
            {
              headers: {
                Authorization: `Bearer ${access}`,
                'Content-Type': 'application/json'
              }
            }
          );
          const data = response.data;
          console.log('input data', input, "data", data);
          setReffer(`http://localhost:5173/airdrop/?reff=${data.referral_link}`);

        } catch (error) {
          console.error("❌ Error update user data:", error.response?.data || error.message);
          return;  // ✅ stop execution if patch fails
        }
      }

      if (response?.data?.success) {  // ✅ optional chaining to avoid crash
        setUserData(prev => ({
          ...prev,
          tokensEarned: response.data.tokensEarned,
          referralLink: response.data.referralLink
        }));
      }

      setIsSubmitted(true);  // ✅ corrected function name
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Submission failed. Please try again.');
    }
  };

  // Copy referral link

  const copyReferralLink = () => {
    navigator.clipboard.writeText(userData.referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const referralLinkRef = useRef(null);

  const referralURL = reffer;

  const handleCopy = () => {
    const input = referralLinkRef.current;

    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand('copy');

    // Modern clipboard API (optional)
    if (navigator.clipboard) {
      navigator.clipboard.writeText(input.value);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    alert(`In production, this will share to ${platform}`);
  };


  if (isSubmitted) return (
    <div className='refferal-body'>
      <div className="airdrop-page">
        <div className="main-content" id="main-content">
          <div className="airdrop-container">
            <div className="referral-card">
              <div className="card-header">
                <i className="fas fa-user-plus"></i>
                <h2>Your Referral Link</h2>
              </div>

              <div className="referral-stats">
                <div className="stat-item">
                  <div className="stat-value">24</div>
                  <div className="stat-label">Referrals</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">1,200</div>
                  <div className="stat-label">Points Earned</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">#86</div>
                  <div className="stat-label">Your Rank</div>
                </div>
              </div>

              <div className="referral-link-container">
                <input
                  type="text"
                  className="referral-link"
                  value={referralURL}
                  ref={referralLinkRef}
                  readOnly
                />
                <button className="ls-copy-btn" onClick={handleCopy}>
                  <i className="far fa-copy"></i> Copy
                </button>
                <div className="copied-message" style={{ opacity: copied ? 1 : 0 }}>
                  Copied!
                </div>
              </div>

              <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>
                Earn 10% bonus for every friend who joins using your link
              </p>

              <div className="social-share">
                <button className="social-btn twitter" onClick={() => handleShare('Twitter')}>
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="social-btn telegram" onClick={() => handleShare('Telegram')}>
                  <i className="fab fa-telegram"></i>
                </button>
                <button className="social-btn whatsapp" onClick={() => handleShare('WhatsApp')}>
                  <i className="fab fa-whatsapp"></i>
                </button>
                <button className="social-btn facebook" onClick={() => handleShare('Facebook')}>
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  if (isComplited == null && isSubmitted) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
          background: "linear-gradient(to right, #1e3c72, #2a5298)", // 🔵 আপনার পছন্দমতো পরিবর্তন করতে পারেন
          color: "white"
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "2rem"
          }}
        >
          Loading...
        </h1>
      </div>
    );
  }

  if (isComplited && !isSubmitted) return (<Dashboard userData={userData} access={access} />)

  if (!isComplited && !isSubmitted) return (<div className="airdrop-page">
    <div className="main-content" id="main-content">
      <div className="airdrop-container">


        <>
          <div className="task-section">
            <h2 className="section-title" >
              Complete Airdrop Tasks
            </h2>


            {/* Twitter Tasks */}
            <div className="task-category">
              <h3 className="category-title"><i className="fab fa-twitter"></i> Twitter Tasks</h3>

              <div className="task-card">
                <div className="task-header">
                  <div className="task-title"><i className="fas fa-user-plus"></i> Follow on Twitter</div>
                  <div className="task-status">Pending</div>
                </div>
                <p className="task-instruction">Follow our official Twitter account to stay updated</p>
                <div className="task-action">
                  <button
                    className="task-btn"
                    onClick={() => window.open('https://twitter.com/PremiumAirdrop', '_blank')}
                  >
                    <i className="fab fa-twitter"></i> Follow
                  </button>
                </div>
                <div className="task-input-group">
                  <label className="task-label">Your Twitter Username</label>
                  <input
                    type="text"
                    className="task-input"
                    placeholder="@yourusername"
                    value={input.twitter}
                    onChange={e => handleInputChange('twitter', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="task-card">
                <div className="task-header">
                  <div className="task-title"><i className="fas fa-retweet"></i> Retweet a Post</div>
                  <div className="task-status">Pending</div>
                </div>
                <p className="task-instruction">Retweet our pinned post</p>
                <div className="task-action">
                  <button
                    className="task-btn"
                    onClick={() => window.open('https://twitter.com/PremiumAirdrop/status/123456789', '_blank')}
                  >
                    <i className="fab fa-twitter"></i> Retweet
                  </button>
                </div>
                <div className="task-input-group">
                  <label className="task-label">Retweet Link (URL)</label>
                  <input
                    type="url"
                    className="task-input"
                    placeholder="https://twitter.com/.../status/..."
                    value={input.retweet}
                    onChange={e => handleInputChange('retweet', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Telegram Tasks */}
            <div className="task-category">
              <h3 className="category-title"><i className="fab fa-telegram"></i> Telegram Tasks</h3>

              <div className="task-card">
                <div className="task-header">
                  <div className="task-title"><i className="fas fa-bullhorn"></i> Join Telegram Channel</div>
                  <div className="task-status">Pending</div>
                </div>
                <p className="task-instruction">Join our announcement channel</p>
                <div className="task-action">
                  <button
                    className="task-btn"
                    onClick={() => window.open('https://t.me/PremiumAirdropChannel', '_blank')}
                  >
                    <i className="fab fa-telegram"></i> Join Channel
                  </button>
                </div>
              </div>

              <div className="task-card">
                <div className="task-header">
                  <div className="task-title"><i className="fas fa-users"></i> Join Telegram Group</div>
                  <div className="task-status">Pending</div>
                </div>
                <p className="task-instruction">Join our community group</p>
                <div className="task-action">
                  <button
                    className="task-btn"
                    onClick={() => window.open('https://t.me/PremiumAirdropGroup', '_blank')}
                  >
                    <i className="fab fa-telegram"></i> Join Group
                  </button>
                </div>
                <div className="task-input-group">
                  <label className="task-label">Your Telegram Username</label>
                  <input
                    type="text"
                    className="task-input"
                    placeholder="@yourusername"
                    value={input.telegram}
                    onChange={e => handleInputChange('telegram', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Wallet */}
            <div className="task-category">
              <h3 className="category-title"><i className="fas fa-wallet"></i> Wallet Submission</h3>
              <div className="task-card">
                <div className="task-header">
                  <div className="task-title"><i className="fas fa-coins"></i> Enter BNB Wallet</div>
                  <div className="task-status">Pending</div>
                </div>
                <p className="task-instruction">Enter your BEP-20 wallet address</p>
                <div className="task-input-group">
                  <label className="task-label">Your BNB Wallet Address</label>
                  <input
                    type="text"
                    className="task-input"
                    placeholder="0x..."
                    value={input.wallet}
                    onChange={e => handleInputChange('wallet', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="airdrop-submit-section">
            <button
              className="task-submit-btn"
              onClick={handleSubmit}
            // disabled={!userData.twitterUsername || !userData.retweetLink || !userData.telegramUsername || !userData.walletAddress}
            >
              Submit & Claim Airdrop
            </button>
          </div></>

      </div>
    </div></div>
  )
};

export default AirdropPage; 