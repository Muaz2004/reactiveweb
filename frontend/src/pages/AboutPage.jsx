import React from 'react';
import './PageLayout.css';

export default function AboutPage() {
  return (
    <div className="page-container">

      {/* 🌟 Intro Section */}
      <div className="about-intro">
        <h2>Who We Are 🌍</h2>
        <p>
          Genete Engenagn is a community-rooted Islamic organization dedicated to uplifting the most vulnerable among us.
          With faith as our compass and compassion as our mission, we serve those in need with sincerity, transparency, and care.
        </p>
      </div>

      {/* 📖 Our Story */}
      <div className="about-story">
        <h2>Our Journey 📖</h2>
        <p>
          What began as a small local initiative to feed hungry families has grown into a broader movement of love and service.
          Over the years, we've provided food, shelter, medical aid, and educational support to thousands in underserved communities.
          Every step has been powered by volunteers, donors, and the grace of Allah ﷻ.
        </p>
      </div>

      {/* 🧭 Our Core Values */}
      <div className="about-values">
        <h2>Our Guiding Principles 🧭</h2>
        <div className="value-boxes">
          <div className="value-box">🤝 Service with Compassion</div>
          <div className="value-box">🌱 Empowerment through Action</div>
          <div className="value-box">🕊️ Justice and Equity for All</div>
          <div className="value-box">🌍 Faith-Driven Community Impact</div>
          <div className="value-box">🧡 Transparency & Trust</div>
        </div>
      </div>

      {/* 📢 Closing Call to Action */}
      <div className="about-closing">
        <h2>Join Our Movement 💪</h2>
        <p>
          Whether you're here to volunteer, donate, or simply learn more — you're part of the change. 
          Together, we can build a world filled with hope, dignity, and care for all.
        </p>
      </div>

    </div>
  );
}
