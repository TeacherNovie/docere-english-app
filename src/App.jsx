import React, { useState } from 'react';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="app-container">
      <h1>Welcome to Docere English Online</h1>
      <p>Offering personalized English and Science classes for learners of all ages.</p>

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

      <h2>📩 Contact & Payment</h2>
      <p>
        Email: <a href="mailto:noviereambonanza@gmail.com">noviereambonanza@gmail.com</a><br/>
        Let us know your preferred material and English level.<br/>
        Payment via PayPal: <strong>noviereambonanza@gmail.com</strong>
      </p>

      <h2>👩‍🏫 About the Teacher</h2>
      <p>
        Hello! I'm Teacher Novie. I hold a TEFL certificate and a Bachelor's degree in Education, majoring in Science.
        I’ve taught English and Science for nearly five years on various online platforms. I specialize in helping learners from ages 3 to 60, 
        and I offer courses in IELTS, TOEIC, EIKEN, travel English, general English, and general science.
      </p>

      <h2>👩‍🏫 Other Teachers</h2>
      <p>
        If Teacher Novie is unavailable, don’t worry! We have many friendly, qualified teachers ready to help you with your lessons.
      </p>

      <h2>📚 Our Classes</h2>
      <ul>
        <li>IELTS, TOEIC, and EIKEN Preparation</li>
        <li>Travel and Conversational English</li>
        <li>General English and Grammar</li>
        <li>Science for Kids and Teens</li>
      </ul>

      <h2>📝 Blog</h2>
      <p>Stay tuned for tips on language learning, study resources, and inspiring stories from our students around the world!</p>

      <h2>💬 Live Chat</h2>
      <p>
        Need help? <a href="https://teams.live.com/l/invite/FEAvj-097Mge-I4wAE" target="_blank" rel="noopener noreferrer">
        Chat with us on Microsoft Teams</a>.
      </p>

      <h2>⭐ Student Comments & Ratings</h2>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <ul className="comment-list">
        {comments.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
