import React, { useState , useEffect} from 'react';
import '../css/login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
  
      // Redirect to home after successful login
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Failed to log in. Please check your credentials.');
    }
  };
  
// prevent logged-in users from accessing the login page
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/');
    }
  });
}, [navigate]);

  return (
    <div className="login-container">
      <div className="login-background">
        <img src="https://i.redd.it/zjgs096khv591.jpg" alt="Netflix Background" />
      </div>
      <div className="login-content">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          <div className="login-help">
            <p>
              <input type="checkbox" /> Remember me
            </p>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className="signup-link">
            <p>New to Netflix? <a href="/signup">Sign up now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
