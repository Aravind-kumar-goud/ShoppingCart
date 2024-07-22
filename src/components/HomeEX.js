// Home.js
import React from 'react';

const Home = ({ setAuthToken }) => {
  const handleLogout = () => {
    setAuthToken('');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
