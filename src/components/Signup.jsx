import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import '../css/signup.css'

export default function Signup() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            navigate('/');
        } catch(error){
            console.log(error);
        }
    }

return (
    <div className="signup-container">
      <div className="signup-background">
        <img src="https://i.redd.it/zjgs096khv591.jpg" alt="Netflix Background" />
      </div>
      <div className="signup-content">
        <form onSubmit={handleSignUp} className="signup-form">
          <h1>Sign Up</h1>
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
          <button type="submit">Sign Up</button>
          <div className="signup-link">
            <p>Already have an account? <a href="/login">Sign in now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
