import React, { useState, useEffect } from 'react';
import './PageLayout.css';
import { useNavigate } from 'react-router-dom';

// 🧾 FORM
function MyForm({ setNeedsRefresh }) {
  const [Donator, setDonator] = useState('');
  const [Amount, setAmount] = useState('');
  const [Contactinfo, setContactinfo] = useState('');
  const [Message, setMessage] = useState('');
  const [SMessage, setSMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  fetch('http://127.0.0.1:8000/api/donations/', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('access_token')
}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    donator: Donator,
    amount: Amount,
    contactinfo: Contactinfo,
    message: Message,
  }),
})

      .then((res) => res.json())
      .then((data) => {
        setNeedsRefresh(prev => !prev); // 🔁 trigger update
        setSMessage(`Thank you, ${Donator}, for your generous support!`);
        setTimeout(() => setSMessage(''), 10000);
        setDonator('');
        setAmount('');
        setContactinfo('');
        setMessage('');
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <>
      <div className="donations-section">
        <h2>Become a Donator</h2>
        <p>
          Your generosity helps transform lives — provide meals, education, and care for families in need. <br />
          Fill out the form below and be the reason someone smiles today.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="donation-form">
        <label>
          Name:
          <input type="text" value={Donator} onChange={(e) => setDonator(e.target.value)} required />
        </label>
        <label>
          Contact:
          <input type="text" value={Contactinfo} onChange={(e) => setContactinfo(e.target.value)} required />
        </label>
        <label>
          Amount:
          <input type="number" value={Amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <label>
          Message:
          <textarea value={Message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Donate</button>
      </form>

      {SMessage && <div className="success-message">{SMessage}</div>}
    </>
  );
}

// 🧾 DONATOR LIST with Pagination
function MyDonations({ needsRefresh }) {
  const [Donationdata, setDonationdata] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('http://127.0.0.1:8000/api/donations/');
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
        throw new Error('Failed to fetch home data');
      }
      return res.json();
    })
    
    .then(data => {
      setDonationdata(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    })
    .catch(console.error);
}, [needsRefresh, currentUrl]);

  if (error) return <p className="error">{error}</p>;
  if (!Donationdata.length) return <p>Loading...</p>;

  return (
    <>
      <div className="donations-section">
        <h2>Previous Donators 💚</h2>
        <p>We are forever grateful for those who have stepped forward to support our cause.</p>
      </div>

      <div className="donation-list">
        {Donationdata.map((donation, index) => (
          <div key={index} className="donation-card">
            <h3>{donation.donator}</h3>
            <p><strong>Amount:</strong> {donation.amount} ETB</p>
            <p><strong>Contact:</strong> {donation.contactinfo}</p>
            <p><em>{donation.message}</em></p>
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

// 🧩 MAIN PAGE
export default function DonatePage() {
  const [needsRefresh, setNeedsRefresh] = useState(false); // ✅ shared state

  return (
    <div className="page-container">
      <MyDonations needsRefresh={needsRefresh} />
      <MyForm setNeedsRefresh={setNeedsRefresh} />

      <div className="donation-closing-section">
        <h2>Join Our Movement 🤝</h2>
        <p>
          Giving is not just about making a donation — it’s about making a difference.
          Your kindness has the power to feed families, educate children, and heal communities.
        </p>

        <div className="closing-highlights">
          <div className="highlight-card">
            <h3>1000+ Lives Touched</h3>
            <p>Thanks to your support, we've provided food and shelter to countless individuals.</p>
          </div>
          <div className="highlight-card">
            <h3>Education for All</h3>
            <p>Your donations help children return to school and pursue brighter futures.</p>
          </div>
          <div className="highlight-card">
            <h3>Be Part of the Change</h3>
            <p>Support us monthly or once — every bit moves us forward.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
