import React from 'react';
import './App.css';

function App() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return (
    <div className="App">
      <header>
        <h1>Your React Website</h1>
      </header>
      
      <nav>
        <ul>
          <li><a href="#">HOME - {months[new Date().getMonth()]}</a></li>
          <li><a href="#">MYSPACE - {months[(new Date().getMonth() + 1) % 12]}</a></li>
          <li><a href="#">LEAVE - {months[(new Date().getMonth() + 2) % 12]}</a></li>
          <li><a href="#">ATTENDANCE - {months[(new Date().getMonth() + 3) % 12]}</a></li>
          <li><a href="#">PERFORMANCE - {months[(new Date().getMonth() + 4) % 12]}</a></li>
          <li><a href="#">EXPENSES AND TRAVEL - {months[(new Date().getMonth() + 5) % 12]}</a></li>
          <li><a href="#">HELP DESK - {months[(new Date().getMonth() + 6) % 12]}</a></li>
        </ul>
      </nav>

      <main>
        <section>
          <h2>{months[new Date().getMonth()]} - Welcome to Our React Website</h2>
          <p>This is a sample section. You can modify it as per your requirements.</p>
        </section>

        {/* Add more sections and content components as needed */}
      </main>

      <footer>
        <p>&copy; 2024 Your React Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;