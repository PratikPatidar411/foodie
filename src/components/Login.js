import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulating login validation (no backend)
    if (username === 'Pratik Patidar' && password === '123') {
      alert('Login Successful!');
      // Redirect to another page or show content (simulate success)
      window.location.href = '/'; // Redirect to home page after login
    } else {
      setError('Invalid username or password!');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-[#F29F67] p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center text-orange-950 mb-8">Login</h1>
        
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-orange-950 font-semibold">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-orange-950 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-orange-950 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;