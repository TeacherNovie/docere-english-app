import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to Docere English Online</h1>
      <p>Offering English and Science classes for all ages.</p>

      <h2>🎓 Book a Lesson</h2>
      <iframe
        src="https://calendly.com/noviereambonanza/25min"
        width="100%"
        height="600"
        frameBorder="0"
        title="Book Now"
      ></iframe>

      <h2>🌟 Free Trial Class</h2>
      <p>New students can enjoy a free 25-minute trial class!</p>

      <h2>📩 Contact Us</h2>
      <p>
        Email: <a href="mailto:noviereambonanza@gmail.com">noviereambonanza@gmail.com</a><br/>
        Let us know your preferred material and English level.
      </p>

      <h2>📘 About the Teacher</h2>
      <p>
        I have a TEFL certificate and a Bachelor's degree in Education, major in Science. 
        I’ve been teaching online for almost five years on various platforms. 
        I work with learners from age 3 to 60 and specialize in IELTS, TOEIC, EIKEN, travel English, general English, and general science.
      </p>

      <h2>📝 Blog Coming Soon!</h2>
      <p>Follow us for helpful tips, lessons, and language inspiration.</p>
    </div>
  );
}

export default App;
