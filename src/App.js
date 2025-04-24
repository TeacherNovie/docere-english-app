import React from 'react';
import './App.css';  // Styles for the App component

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to Docere English Online</h1>
      <p>We offer English and Science classes online!</p>
      <h2>Book a Lesson</h2>
      <iframe
        src="https://calendly.com/noviereambonanza"
        width="100%"
        height="600"
        frameBorder="0"
        title="Booking Calendar"
      ></iframe>
      <h2>Buy Lesson Packages</h2>
      <p>5 lessons for $50 or 10 lessons for $95</p>
      <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
        Pay with PayPal
      </a>
    </div>
  );
}

export default App;
