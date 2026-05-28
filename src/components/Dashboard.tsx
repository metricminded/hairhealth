import { useState, useEffect } from 'react';
import './Dashboard.css';

interface MetricCard {
  label: string;
  value: string | number;
  subtext: string;
  icon: string;
  color: string;
}

interface ChartData {
  name: string;
  value: number;
  percentage: string;
}

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Key Metrics
  const metrics: MetricCard[] = [
    {
      label: 'Total Leads',
      value: '4,566',
      subtext: 'Customer records',
      icon: '👥',
      color: '#667eea'
    },
    {
      label: 'With Email',
      value: '1,075',
      subtext: '23.5% email capture',
      icon: '📧',
      color: '#f093fb'
    },
    {
      label: 'High Quality',
      value: '436',
      subtext: '9.5% ready to convert',
      icon: '🎯',
      color: '#4ade80'
    },
    {
      label: 'Urgent Prospects',
      value: '460',
      subtext: '10.1% want action soon',
      icon: '🔥',
      color: '#fb923c'
    },
    {
      label: 'Revenue Potential',
      value: '₹121-211M',
      subtext: '243-423 conversions',
      icon: '💰',
      color: '#06b6d4'
    },
    {
      label: 'Booking Requests',
      value: '917',
      subtext: '20.1% pre-qualified',
      icon: '🎫',
      color: '#a78bfa'
    }
  ];

  // Geographic Data
  const topCountries: ChartData[] = [
    { name: 'India', value: 4258, percentage: '93.3%' },
    { name: 'UAE', value: 59, percentage: '1.3%' },
    { name: 'USA', value: 33, percentage: '0.7%' },
    { name: 'UK', value: 31, percentage: '0.7%' },
    { name: 'Australia', value: 30, percentage: '0.7%' }
  ];

  // Lead Quality Data
  const leadQuality = [
    { name: 'High Quality', value: 436, color: '#4ade80' },
    { name: 'Medium Quality', value: 639, color: '#fbbf24' },
    { name: 'Low Quality', value: 3491, color: '#f87171' }
  ];

  // Timeline Data
  const timeline = [
    { name: 'As soon as possible', value: 460, color: '#ef4444' },
    { name: 'In next 3 months', value: 352, color: '#f97316' },
    { name: 'In next 12 months', value: 131, color: '#eab308' },
    { name: 'Information only', value: 289, color: '#06b6d4' },
    { name: 'Not specified', value: 3334, color: '#d1d5db' }
  ];

  // Gender Data
  const gender = [
    { name: 'Male', value: 2164, percentage: '47.4%' },
    { name: 'Female', value: 513, percentage: '11.2%' },
    { name: 'Not Specified', value: 1889, percentage: '41.4%' }
  ];

  // Treatment Preferences
  const treatments = [
    { name: 'Not Specified', value: 3323, percentage: '72.8%' },
    { name: 'No Treatments', value: 531, percentage: '11.6%' },
    { name: 'Minoxidil', value: 238, percentage: '5.2%' },
    { name: 'PRP Treatment', value: 205, percentage: '4.5%' },
    { name: 'Hair Transplant', value: 205, percentage: '4.5%' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Customer Analytics Dashboard</h1>
        <p>4,566 Landbot Leads Analysis</p>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {metrics.map((metric, idx) => (
          <div key={idx} className="metric-card" style={{ borderLeftColor: metric.color }}>
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-content">
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-subtext">{metric.subtext}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📍 Geographic
        </button>
        <button
          className={`tab-btn ${activeTab === 'quality' ? 'active' : ''}`}
          onClick={() => setActiveTab('quality')}
        >
          🎯 Lead Quality
        </button>
        <button
          className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          ⏱️ Timeline
        </button>
        <button
          className={`tab-btn ${activeTab === 'demographics' ? 'active' : ''}`}
          onClick={() => setActiveTab('demographics')}
        >
          👥 Demographics
        </button>
        <button
          className={`tab-btn ${activeTab === 'treatments' ? 'active' : ''}`}
          onClick={() => setActiveTab('treatments')}
        >
          💊 Treatments
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="chart-container">
            <h2>🌍 Top 5 Countries</h2>
            <div className="bar-chart">
              {topCountries.map((country, idx) => (
                <div key={idx} className="bar-item">
                  <div className="bar-label">
                    <span>{country.name}</span>
                    <span className="bar-value">{country.value}</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{
                        width: `${(country.value / 4258) * 100}%`,
                        background: 'linear-gradient(90deg, #667eea, #764ba2)'
                      }}
                    ></div>
                  </div>
                  <div className="bar-percentage">{country.percentage}</div>
                </div>
              ))}
            </div>
            <div className="insight">
              <strong>🔍 Key Insight:</strong> India dominates with 93.3% of all leads. Localization strategy critical for success.
            </div>
          </div>
        )}

        {activeTab === 'quality' && (
          <div className="chart-container">
            <h2>🎯 Lead Quality Breakdown</h2>
            <div className="pie-chart">
              {leadQuality.map((quality, idx) => {
                const total = leadQuality.reduce((sum, q) => sum + q.value, 0);
                const percentage = ((quality.value / total) * 100).toFixed(1);
                return (
                  <div key={idx} className="pie-slice" style={{ backgroundColor: quality.color }}>
                    <div className="pie-content">
                      <div className="pie-label">{quality.name}</div>
                      <div className="pie-value">{quality.value}</div>
                      <div className="pie-percentage">{percentage}%</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="quality-legend">
              {leadQuality.map((quality, idx) => (
                <div key={idx} className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: quality.color }}
                  ></div>
                  <span>{quality.name}: {quality.value}</span>
                </div>
              ))}
            </div>
            <div className="insight">
              <strong>🔍 Key Insight:</strong> Only 9.5% high-quality leads (email + phone + severity).
              76.5% missing email - major re-engagement opportunity.
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="chart-container">
            <h2>⏱️ Timeline to Action</h2>
            <div className="timeline-chart">
              {timeline.map((item, idx) => {
                const total = timeline.reduce((sum, t) => sum + t.value, 0);
                const percentage = ((item.value / total) * 100).toFixed(1);
                return (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-label">
                      <span>{item.name}</span>
                      <span className="timeline-value">{item.value}</span>
                    </div>
                    <div className="timeline-bar">
                      <div
                        className="timeline-fill"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                    <div className="timeline-percentage">{percentage}%</div>
                  </div>
                );
              })}
            </div>
            <div className="insight">
              <strong>🔍 Key Insight:</strong> 812 leads (17.8%) ready within 3 months. 460 want action ASAP - immediate sales opportunity.
            </div>
          </div>
        )}

        {activeTab === 'demographics' && (
          <div className="chart-container">
            <h2>👥 Demographics</h2>
            <div className="demographics-grid">
              <div className="demo-card">
                <h3>Gender Distribution</h3>
                <div className="demo-bars">
                  {gender.map((g, idx) => (
                    <div key={idx} className="demo-bar">
                      <div className="demo-label">{g.name}</div>
                      <div className="demo-value">{g.value}</div>
                      <div className="demo-percentage">{g.percentage}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="insight">
              <strong>🔍 Key Insight:</strong> 47.4% male, 11.2% female. 41.4% not specified.
              Males are primary demographic - tailor messaging accordingly.
            </div>
          </div>
        )}

        {activeTab === 'treatments' && (
          <div className="chart-container">
            <h2>💊 Treatment Preferences</h2>
            <div className="treatment-list">
              {treatments.map((treatment, idx) => (
                <div key={idx} className="treatment-item">
                  <div className="treatment-name">{treatment.name}</div>
                  <div className="treatment-bar">
                    <div
                      className="treatment-fill"
                      style={{
                        width: `${parseFloat(treatment.percentage)}%`
                      }}
                    ></div>
                  </div>
                  <div className="treatment-stats">
                    <span>{treatment.value}</span>
                    <span>{treatment.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="insight">
              <strong>🔍 Key Insight:</strong> 72.8% unspecified treatment preference.
              648 leads open to interventions. Opportunity to guide treatment selection.
            </div>
          </div>
        )}
      </div>

      {/* Opportunities Section */}
      <div className="opportunities-section">
        <h2>🎯 Immediate Opportunities</h2>
        <div className="opportunities-grid">
          <div className="opportunity-card" style={{ borderTopColor: '#4ade80' }}>
            <div className="opp-icon">🔥</div>
            <div className="opp-content">
              <h3>Ready to Convert</h3>
              <div className="opp-value">436 leads</div>
              <p>Email + Phone + Severity 3+</p>
              <div className="opp-action">Sales Follow-up</div>
            </div>
          </div>

          <div className="opportunity-card" style={{ borderTopColor: '#f97316' }}>
            <div className="opp-icon">⏰</div>
            <div className="opp-content">
              <h3>Urgent Prospects</h3>
              <div className="opp-value">812 leads</div>
              <p>Action within 3 months</p>
              <div className="opp-action">Email Campaign</div>
            </div>
          </div>

          <div className="opportunity-card" style={{ borderTopColor: '#06b6d4' }}>
            <div className="opp-icon">🎫</div>
            <div className="opp-content">
              <h3>Booking Requests</h3>
              <div className="opp-value">917 leads</div>
              <p>Already want consultation</p>
              <div className="opp-action">Schedule Calls</div>
            </div>
          </div>

          <div className="opportunity-card" style={{ borderTopColor: '#a78bfa' }}>
            <div className="opp-icon">💎</div>
            <div className="opp-content">
              <h3>Severe Cases</h3>
              <div className="opp-value">242 leads</div>
              <p>Grade 5+ severity</p>
              <div className="opp-action">Premium Pricing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Projection */}
      <div className="revenue-section">
        <h2>💰 Revenue Projections</h2>
        <div className="revenue-cards">
          <div className="revenue-card conservative">
            <h3>Conservative</h3>
            <div className="revenue-value">₹121.5M</div>
            <p>243 conversions @ 5% rate</p>
            <div className="revenue-details">
              <div>High Quality: 109</div>
              <div>Medium Quality: 64</div>
              <div>Low Quality: 70</div>
            </div>
          </div>

          <div className="revenue-card optimistic">
            <h3>Optimistic</h3>
            <div className="revenue-value">₹211.5M</div>
            <p>423 conversions @ 15% rate</p>
            <div className="revenue-details">
              <div>High Quality: 152</div>
              <div>Medium Quality: 96</div>
              <div>Low Quality: 175</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
