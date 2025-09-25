import React, { useState, useEffect } from 'react';
import './PageLayout.css';

function MyComponent() {
  const [Homedata, setHomedata] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    fetch('http://127.0.0.1:8000/api/home/', {
      
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch home data');
        return res.json();
      })
      .then(data => setHomedata(data[0]))
      .catch(console.error);
  }, []);

  if (!Homedata) return <p>Loading...</p>;


  return (
  <div className="home-page">

    {/* 🖼️ Hero Section */}
    <div
      className="hero"
      style={{ backgroundImage: `url(${Homedata.img})` }}
    >
      <div className="hero-content">
        <h1>{Homedata.headline}</h1>
        <p>{Homedata.subline}</p>
        <button>{Homedata.cta_primary}</button>
        <button>{Homedata.cta_secondary}</button>
      </div>
    </div>

    {/* 📜 Mission Section */}
    <div className="section">
      <h2>Our Mission</h2>
      <p>{Homedata.mission}</p>
    </div>

    {/* 💛 Core Values */}
    <div className="section">
      <h2>Our Core Values</h2>
      <div className="core-values">
        <div>
          <h3>{Homedata.core_value_1}</h3>
        </div>
        <div>
          <h3>{Homedata.core_value_2}</h3>
        </div>
      </div>
    </div>

    {/* 📈 Impact Stat */}
    <div className="section">
      <h2>Our Impact</h2>
      <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{Homedata.impact_stat}</p>
    </div>

    {/* 🗣️ Testimonial */}
    <div className="testimonial">
      <p>{Homedata.testimonial}</p>
    </div>

    {/* 📬 Newsletter Prompt */}
    <div className="newsletter">
      <p>{Homedata.newsletter_prompt}</p>
    </div>

  </div>
);

 
}

export default function HomePage() {
  return (
    <div className="page-container">
      <MyComponent />
    </div>
  );
}
