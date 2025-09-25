import React from 'react';
import './PageLayout.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function MyForm({ setNeedsRefresh }) {
  const [Volunteer, setVolunteer] = useState('');
  const [Contactinfo, setContactinfo] = useState('');
  const [Areaofinterest, setAreaofinterest] = useState('');
  const [SMessage, setSMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/volunteer/', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('access_token')
}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: Volunteer,
    contactinfo: Contactinfo,
    areaofinterest: Areaofinterest,
  }),
})

     
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setNeedsRefresh(prev => !prev); // 🔁 trigger update
        setSMessage(`Thank you, ${Volunteer}, for filling the volunteer form we will contact you!`);
        setTimeout(() => setSMessage(''), 10000);
        setVolunteer('');
        setContactinfo('');
        setAreaofinterest('');
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <>
      
      <form onSubmit={handleSubmit} className="volunteer-form">
        <label>
          Name:
          <input type="text" value={Volunteer} onChange={(e) => setVolunteer(e.target.value)} required />
        </label>
        <label>
          Contact:
          <input type="text" value={Contactinfo} onChange={(e) => setContactinfo(e.target.value)} required />
        </label>
        <label>
          Area Of Interest:
          <textarea value={Areaofinterest} onChange={(e) => setAreaofinterest(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {SMessage && <div className="success-message">{SMessage}</div>}
    </>
  );
}




function MyVolunteers({ needsRefresh }) {
  const [Volunteersdata, setVolunteersdata] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('http://127.0.0.1:8000/api/volunteer/');
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
      }
      if (!res.ok) {
        throw new Error('Failed to fetch volunteer data');
      }
      return res.json();
    })
    .then(data => {
      setVolunteersdata(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    })
    .catch(console.error);
}, [needsRefresh, currentUrl]);

  if (error) return <p className="error">{error}</p>;
  if (!Volunteersdata.length) return <p>Loading...</p>;

  return (
    <>
     

      <div className="volunteer-list">
        {Volunteersdata.map((volunteer, index) => (
          <div key={index} className="volunteer-card">
            <h3>{volunteer.name}</h3>
            <p><strong>Contact:</strong> {volunteer.contactinfo}</p>
            <p><em>{volunteer.areaofinterest}</em></p>
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












export default function VolunteerPage() {
  const [needsRefresh, setNeedsRefresh] = useState(false); // ✅ shared state
  return (
    <>
    <div className="volunteer-intro-section">
  <h2>Become a Change-Maker 🤝</h2>
  <p>
    Volunteering is a powerful way to give back. Join hands with us and help uplift communities, support meaningful initiatives,
    and be part of something bigger than yourself.
  </p>
  
  <h3>Meet Our Dedicated Volunteers 🙌</h3>
  <p>
    Below is a list of individuals who have already taken the step to support our mission. We’re grateful for every hand that helps!
  </p>
</div>



    <div className="page-container">
      <MyVolunteers needsRefresh={needsRefresh} />

<div className="volunteer-form-note">
  <h3>Want to Get Involved? 🌱</h3>
  <p>
    Fill out the form below to join our volunteer team and be part of positive change.
  </p>
</div>


      <MyForm setNeedsRefresh={setNeedsRefresh} />
    </div>




    <div className="volunteer-closing-note">
  <h2>Volunteering Is Impactful 💪</h2>
  <p>
    Our volunteers are the backbone of our mission. From logistics to outreach, they breathe life into every initiative. 
    Ready to step up and make a difference?
  </p>
</div>

<div className="volunteer-closing-highlights">
  <div className="highlight-box">🌟 Purpose Driven</div>
  <div className="highlight-box">🕊️ Empathy in Action</div>
  <div className="highlight-box">🏡 Local to Global Impact</div>
  <div className="highlight-box">📚 Learn & Grow</div>
  <div className="highlight-box">🎉 Inspire Change</div>
</div>

    </>
  );
}



