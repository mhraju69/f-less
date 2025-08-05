import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import './css/tokenomics.css';


const tokenData = [
  { title: 'Pre-sale', color: 'var(--gold)', width: 50, amount: '1,000,000 tokens', percent: '50%', desc: 'Fully unlocked' },
  { title: 'Liquidity', color: 'var(--green)', width: 25, amount: '500,000 tokens', percent: '25%', desc: 'Locked in LP (via PinkSale)' },
  { title: 'Marketing/Build', color: 'var(--orange)', width: 3, amount: '60,000 tokens', percent: '3%', desc: 'Used gradually for campaigns' },
  { title: 'Reserve', color: 'var(--red-orange)', width: 10, amount: '200,000 tokens', percent: '10%', desc: '20% unlocked monthly for 5 months' },
  { title: 'Team', color: 'var(--red)', width: 2, amount: '40,000 tokens', percent: '2%', desc: '10% at TGE, then 20% monthly' },
  { title: 'Owner Wallet', color: 'var(--purple)', width: 10, amount: '200,000 tokens', percent: '10%', desc: 'Long-term held, public' }
];

const Tokenomics = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Create particles
    const container = document.getElementById('particles');
    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        Object.assign(particle.style, {
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 20 + 10}s`,
          animationDelay: `${Math.random() * 10}s`
        });
        container.appendChild(particle);
      }
    }

    // Destroy old chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: tokenData.map(d => d.title),
        datasets: [{
          data: tokenData.map(d => d.width),
          backgroundColor: [
            'rgba(255, 215, 0, 0.8)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(255, 165, 0, 0.8)',
            'rgba(255, 107, 53, 0.8)',
            'rgba(255, 85, 85, 0.8)',
            'rgba(156, 39, 176, 0.8)'
          ],
          borderColor: [
            'rgba(255, 215, 0, 1)',
            'rgba(76, 175, 80, 1)',
            'rgba(255, 165, 0, 1)',
            'rgba(255, 107, 53, 1)',
            'rgba(255, 85, 85, 1)',
            'rgba(156, 39, 176, 1)'
          ],
          borderWidth: 1,
          hoverOffset: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#F0F0F0',
              font: { family: 'Poppins', size: 12 },
              padding: 20
            }
          },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                const label = ctx.label || '';
                const value = ctx.raw || 0;
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const percent = Math.round((value / total) * 100);
                const tokens = (value * 2000000 / 100).toLocaleString();
                return `${label}: ${percent}% (${tokens} tokens)`;
              }
            }
          }
        }
      }
    });

    return () => chartInstance.current?.destroy();
  }, []);

  return (
    <div className="tokenomics-wrapper" id='tokenomics'>
      
      <div id="particles"></div>

      <div className="section-header">
        <h2>Tokenomics</h2>
        <p>Transparent and sustainable token distribution for long-term growth</p>
      </div>

      <div className="tokenomics-container">
        <div className="token-cards">
          {tokenData.map((t, i) => (
            <div className="token-card" key={i}>
              <div className="token-header">
                <div className="token-dot" style={{ backgroundColor: t.color }}></div>
                <div className="token-title">{t.title}</div>
              </div>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${t.width}%` }}></div>
              </div>
              <div className="token-details">
                <span>{t.amount}</span>
                <span>{t.percent}</span>
              </div>
              <div className="token-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        <div className="chart-container">
          <div className="chart-wrapper">
            <canvas ref={chartRef} id="tokenChart"></canvas>
            <div className="total-supply">
              <div>Total Supply</div>
              <div>2M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
