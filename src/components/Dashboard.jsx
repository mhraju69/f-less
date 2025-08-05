import React, { useEffect, useState } from 'react';
import './css/Dashboard.css'; // Custom styles for particles, animations, etc.

const Dashboard = ({ userData,access }) => {
    const [walletStatus, setWalletStatus] = useState('Pending');
    const referralCode = userData.referral_code ? `http://localhost:5173/airdrop/?reff=${userData.referral_code}` : 'Submit your task first ';
    const referralLink = `http://localhost:5173/airdrop/?reff=${referralCode}`;

    useEffect(() => {
        createParticles();
        // animateCounters();
        // Simulate wallet status update after 3s
        const timer = setTimeout(() => setWalletStatus('Approved'), 3000);
        return () => clearTimeout(timer);
    }, [userData]);

    const createParticles = () => {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30;
        if (!particlesContainer) return;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 2 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            const duration = Math.random() * 20 + 10;
            particle.style.animationDuration = `${duration}s`;

            const delay = Math.random() * 10;
            particle.style.animationDelay = `${delay}s`;

            particlesContainer.appendChild(particle);
        }
    };

    const exportData = async () => {
        try {
            const response = await axios.get(
                'https://mhraju0069.pythonanywhere.com/airdrop/export-csv/',
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log('response=', response)
        }catch{} }

    // const animateCounters = () => {
    //     let interval = setInterval(() => {
    //         setCounters(prev => {
    //             let newPoints = prev.points < userData.points ? prev.points + 25 : userData.points;
    //             let newEarnings = prev.earnings < 1250 ? prev.earnings + 25 : 1250;
    //             if (newPoints === 1250 && newEarnings === 1250) clearInterval(interval);
    //             return {
    //                 ...prev,
    //                 points: newPoints,
    //                 earnings: newEarnings
    //             };
    //         });
    //     }, 30);
    // };

    const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text)
                .then(() => alert(`Copied to clipboard: ${text}`))
                .catch(console.error);
        };

        const copyReferralLink = () => {
            navigator.clipboard.writeText(referralLink).then(() => {
                const copiedText = document.querySelector('.copied-text');
                if (copiedText) {
                    copiedText.style.opacity = '1';
                    setTimeout(() => copiedText.style.opacity = '0', 2000);
                }
            });
        };

        return (
            <div className="dashboard">
                <div id="particles" />
                {/* <h1>Welcome Raju</h1> */}
                <div className="container">

                    <div className="main-content">
                        {/* Stats Section */}
                        <section className="stats-grid">
                            <div className="stat-card">
                                <i className="fas fa-star gold" />
                                <h3>Total Points</h3>
                                <div className="stat-value">{userData.airdrop_points}</div>
                            </div>
                            <div className="stat-card">
                                <i className="fas fa-link blue" />
                                <h3>Referrals</h3>
                                <div className="stat-value">{userData.reffer_count}</div>
                                <small>{userData.reffer_count * 200} bonus points</small>
                            </div>
                            <div className="stat-card">
                                <i className="fas fa-tasks gold" />
                                <h3>Tasks Completed</h3>
                                <div className="stat-value">5/5</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '40%' }} />
                                </div>
                            </div>
                            <div className="stat-card">
                                <i className="fas fa-coins blue" />
                                <h3>Total Earnings</h3>
                                <div className="stat-value">{userData.airdrop_points + userData.reffer_count * 200}</div>
                                <small>≈ $18.75</small>
                            </div>
                        </section>

                        {/* Profile + Wallet */}
                        <section className="card account-card">
                            <div className="account-profile">
                                <div className="card-header">
                                    <i className="fas fa-user-circle" />
                                    <h2>Profile Information</h2>
                                </div>
                                <div className="input-group">
                                    <label>Name</label>
                                    <input disabled value={userData.name} className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>Email</label>
                                    <input disabled value={userData.email} className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>Referral Code</label>
                                    <div className="referral-wrapper">
                                        <input disabled value={referralCode} className="input-field" />
                                        <button className="copy-btn" onClick={() => copyToClipboard(referralCode)}>
                                            <i className="far fa-copy" /> Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="account-wallet">
                                <div className="card-header">
                                    <i className="fas fa-wallet" />
                                    <h2>Wallet Information</h2>
                                </div>
                                <div className="input-group">
                                    <label>BEP-20 Wallet Address</label>
                                    <input disabled='true' defaultValue={userData.wallet} className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>Status</label>
                                    <span className={`status-badge status-${walletStatus.toLowerCase()}`}>
                                        {walletStatus}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Tasks */}
                        <section className="card">
                            <div className="card-header">
                                <i className="fas fa-tasks" />
                                <h2>Task Progress</h2>
                            </div>
                            <div className="task-list">
                                <div className="task-item">
                                    <div className="task-header">
                                        <div className="task-title">
                                            <div className="task-number">1</div>
                                            <div className="task-name">Follow Twitter</div>
                                        </div>
                                        <div className="task-points">1000 pts</div>
                                    </div>
                                    <div className="task-input-group">
                                        <input
                                            value={userData.twitter}
                                            placeholder={!userData.twitter ? 'Enter your twitter username' : ''}
                                            disabled={userData.twitter ? 'true' : 'false'}
                                            className="task-input"
                                        />
                                        <button className="dash-submit-btn">Submit Proof</button>
                                    </div>
                                </div>
                                <div className="task-item">
                                    <div className="task-header">
                                        <div className="task-title">
                                            <div className="task-number">2</div>
                                            <div className="task-name">Follow Twitter</div>
                                        </div>
                                        <div className="task-points">1000 pts</div>
                                    </div>
                                    <div className="task-input-group">
                                        <input
                                            value={userData.twitter}
                                            placeholder={!userData.twitter ? 'Enter your twitter username' : ''}
                                            disabled={userData.twitter ? 'true' : 'false'}
                                            className="task-input"
                                        />
                                        <button className="dash-submit-btn">Submit Proof</button>
                                    </div>
                                </div>
                                <div className="task-item">
                                    <div className="task-header">
                                        <div className="task-title">
                                            <div className="task-number">3</div>
                                            <div className="task-name">Follow Twitter</div>
                                        </div>
                                        <div className="task-points">1000 pts</div>
                                    </div>
                                    <div className="task-input-group">
                                        <input
                                            value={userData.twitter}
                                            placeholder={!userData.twitter ? 'Enter your twitter username' : ''}
                                            disabled={userData.twitter ? 'true' : 'false'}
                                            className="task-input"
                                        />
                                        <button className="dash-submit-btn">Submit Proof</button>
                                    </div>
                                </div>
                                <div className="task-item">
                                    <div className="task-header">
                                        <div className="task-title">
                                            <div className="task-number">4</div>
                                            <div className="task-name">Follow Twitter</div>
                                        </div>
                                        <div className="task-points">1000 pts</div>
                                    </div>
                                    <div className="task-input-group">
                                        <input
                                            value={userData.twitter}
                                            placeholder={!userData.twitter ? 'Enter your twitter username' : ''}
                                            disabled={userData.twitter ? 'true' : 'false'}
                                            className="task-input"
                                        />
                                        <button className="dash-submit-btn">Submit Proof</button>
                                    </div>
                                </div>
                                <div className="task-item">
                                    <div className="task-header">
                                        <div className="task-title">
                                            <div className="task-number">5</div>
                                            <div className="task-name">Follow Twitter</div>
                                        </div>
                                        <div className="task-points">1000 pts</div>
                                    </div>
                                    <div className="task-input-group">
                                        <input
                                            value={userData.twitter}
                                            placeholder={!userData.twitter ? 'Enter your twitter username' : ''}
                                            disabled={userData.twitter ? 'true' : 'false'}
                                            className="task-input"
                                        />
                                        <button className="dash-submit-btn">Submit Proof</button>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div className="card rank-card">
                            <div className="rank-icon"><i className="fas fa-trophy" /></div>
                            <div className="rank-number">#86</div>
                            <div className="rank-label">Current Position</div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <i className="fas fa-gift" />
                                <h2>Airdrop Status</h2>
                            </div>
                            <div className="airdrop-info">
                                <div className="info-row"><span>Pool Size:</span> <span>4,000 LES</span></div>
                                <div className="info-row"><span>Winners:</span> <span>1000 + Top 20</span></div>
                                <div className="info-row"><span>Ends:</span> <span className="red">Nov 1, 2025</span></div>
                                <div className="info-row"><span>Distribution:</span> <span>After Listing</span></div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <i className="fas fa-share-alt" />
                                <h2>Referral Tools</h2>
                            </div>
                            <div className="referral-tools">
                                <button className="tool-btn export-btn" onClick={exportData} ><i className="fas fa-file-export" /> Export Data</button>
                                <button className="tool-btn referral-btn" onClick={copyReferralLink}>
                                    <i className="fas fa-copy" /> Copy Referral Link
                                    <span className="copied-text">Copied!</span>
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        );
    };

    export default Dashboard;
