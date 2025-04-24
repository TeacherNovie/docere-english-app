import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#1e3a8a' }}>Docere English Online</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>
          Friendly and Professional English & Science Classes
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1d4ed8' }}>Lesson Packages</h2>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style={{ marginBottom: '1rem' }}>
          <input type="hidden" name="cmd" value="_xclick" />
          <input type="hidden" name="business" value="noviereambonanza@gmail.com" />
          <input type="hidden" name="item_name" value="5 English Lessons" />
          <input type="hidden" name="amount" value="2850" />
          <input type="hidden" name="currency_code" value="PHP" />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px' }}>
            Buy 5 Lessons (PHP 2,850)
          </button>
        </form>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
          <input type="hidden" name="cmd" value="_xclick" />
          <input type="hidden" name="business" value="noviereambonanza@gmail.com" />
          <input type="hidden" name="item_name" value="10 English Lessons" />
          <input type="hidden" name="amount" value="5400" />
          <input type="hidden" name="currency_code" value="PHP" />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '5px' }}>
            Buy 10 Lessons (PHP 5,400)
          </button>
        </form>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1d4ed8' }}>Book Your Lesson</h2>
        <iframe
          src="https://calendly.com/noviereambonanza"
          width="100%"
          height="600"
          frameBorder="0"
          title="Schedule with Docere English Online"
          style={{ borderRadius: '10px', border: '1px solid #ccc' }}
        ></iframe>
      </section>

      <section>
        <h2 style={{ color: '#1d4ed8' }}>About the Classes</h2>
        <p style={{ color: '#374151' }}>
          I offer tailored lessons in English and Science, designed for students from beginner to advanced levels.
          Whether you’re preparing for IELTS, TOEIC, or just improving your speaking skills, I’m here to guide you step by step
          in a friendly, motivating environment.
        </p>
      </section>
    </div>
  );
}

export default App;