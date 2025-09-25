import React from 'react';
import { useState, useEffect } from 'react';
import './PageLayout.css'
import { useNavigate } from 'react-router-dom';



function MyProjects() {
    const [Projectdata, setProjectdata] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [currentUrl, setCurrentUrl] = useState('http://127.0.0.1:8000/api/projects/');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

 useEffect(() => {
  fetch(currentUrl, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('access_token')
}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.status === 401) {
         navigate('/logout');
           window.location.reload();
        return null;
      }
      if (!res.ok) {
        throw new Error('Failed to fetch volunteer data');
      }
      return res.json();
    })
    .then(data => {
      setProjectdata(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    })
    .catch(console.error);
}, [currentUrl]);
  if (error) return <p className="error">{error}</p>;
  if (!Projectdata) return <p>Loading...</p>;

 return (
  <>
  <div className="projects-grid">
    {Projectdata && Projectdata.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.img} alt={project.title} className="project-img" />
        <h2>{project.title}</h2>
        <p>{project.detail}</p>
        <span className={`status ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>
    ))}
  </div>

   <div className="pagination-buttons">
        <button
          onClick={() => prevUrl && setCurrentUrl(prevUrl)}
          disabled={!prevUrl}
        >
          Previous
        </button>
        <button
          onClick={() => nextUrl && setCurrentUrl(nextUrl)}
          disabled={!nextUrl}
        >
          Next
        </button>
      </div>

      </>
);


}









export default function ProjectsPage() {
  return (
    <>
        <div className="projects-intro-section">
  <h2>Welcome to Our Project Gallery 📂</h2>
  <p>Every project we showcase reflects a story of effort, impact, and vision. From tech innovation to community outreach, we’re proud to present these milestones.</p>
  <div className="projects-intro-highlights">
    <div className="highlight-box">🌍 Global Reach</div>
    <div className="highlight-box">🤝 Community Driven</div>
    <div className="highlight-box">💡 Creative Thinking</div>
  </div>
</div>
<div className="projects-intro-note">
  <h2>Our Ongoing Initiatives 🚧</h2>
  <p>
    Below is a growing list of projects we’ve launched — each crafted with purpose, backed by vision, and driven by community needs. Explore what we’re building!
  </p>
</div>




    <div className="page-container">
      <MyProjects/>
    </div>


  <div className="projects-closing-section">
  <h2>Why Our Projects Matter 🌟</h2>
  <p>Behind every task we undertake is a reason — a goal to uplift, innovate, and bring meaningful change to our community.</p>

  <div className="closing-pillars">
    <div className="pillar-box">
      <h3>🔬 Innovation First</h3>
      <p>We believe progress comes from exploring new ideas and applying fresh perspectives to old problems.</p>
    </div>
    <div className="pillar-box">
      <h3>📣 Community Voice</h3>
      <p>Your feedback and involvement fuel our direction. We grow stronger together, guided by the people we serve.</p>
    </div>
    <div className="pillar-box">
      <h3>🚀 Looking Forward</h3>
      <p>We’re not stopping here. Many projects are in the pipeline — bold, challenging, and impactful. Stay with us on this journey.</p>
    </div>
    <div className="pillar-box">
      <h3>📈 Continuous Growth</h3>
      <p>From humble beginnings to large-scale initiatives, our team is committed to learning, evolving, and scaling with integrity.</p>
    </div>
    <div className="pillar-box">
      <h3>🔗 Connect with Us</h3>
      <p>Whether you’re a supporter, a collaborator, or just curious — we welcome you. Stay updated on our ongoing and future missions.</p>
    </div>
  </div>
</div>

<div className="projects-closing-highlights">
  <div className="highlight-box">🚀 Mission-Focused</div>
  <div className="highlight-box">🎯 Results-Oriented</div>
  <div className="highlight-box">🌱 Sustainable Impact</div>
  <div className="highlight-box">📢 Open Collaboration</div>
  <div className="highlight-box">🧭 Vision-Led</div>
</div>



    </>
  );
}