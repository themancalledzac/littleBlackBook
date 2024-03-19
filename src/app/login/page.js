'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform login logic here

    const success = true; // Replace this with actual login logic

    if (success) {
      setIsLoggedIn(true); // Update isLoggedIn state
      router.push('/user');
    } else {
      // Handle login failure (display error message, etc.)
      alert('Login failed. Please try again.');
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        {/* Input fields for email and password */}
        <div>
          <label for="name">User Name:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label for="mail">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div >
  );
}
