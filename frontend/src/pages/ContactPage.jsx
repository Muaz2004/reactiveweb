import React, { useState, useEffect } from 'react';
import './PageLayout.css';

function ContactDetails() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/contact/')
      .then(res => res.json())
      .then(data => setContactData(data[0]))
      .catch(console.error);
  }, []);

  return (
    <>
      {contactData && (
        <div className="contact-info">
          <p><strong>Phone:</strong> {contactData.contactinfo}</p>
          <p><strong>Address:</strong> {contactData.address}</p>
        </div>
      )}
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <div className="contact-intro-note">
        <h2>Let’s Connect 📞</h2>
        <p>
          We're here to listen, help, and collaborate. Reach out to us through any of the methods below.
        </p>
      </div>

      <div className="contact-intro-highlights">
        <div className="highlight-box">📱 Always Reachable</div>
        <div className="highlight-box">⏱️ Quick Responses</div>
        <div className="highlight-box">💬 Friendly Support</div>
      </div>

      <div className="contact-reach-note">
  <h3>📞 Reach Us Easily</h3>
  <p>
    You can get in touch with us using the details below. For faster responses, feel free to message us directly on Telegram:
    <a href="https://t.me/Albatross3749" target="_blank" rel="noopener noreferrer">
      contact us on tellegram
    </a>
  </p>
</div>


      <div className="page-container">
        <ContactDetails />
      </div>

      <div className="contact-closing-note">
        <h2>We Value Every Message 💬</h2>
        <p>
          Whether it’s a question, feedback, or a new idea — we’d love to hear from you. Let’s make something amazing together.
        </p>
      </div>

      <div className="contact-closing-highlights">
        <div className="highlight-box">🌍 Open to Everyone</div>
        <div className="highlight-box">🧭 Clear Direction</div>
        <div className="highlight-box">🎯 Focused Goals</div>
        <div className="highlight-box">📩 Direct Communication</div>
        <div className="highlight-box">🤝 Respect & Collaboration</div>
      </div>
    </>
  );
}
