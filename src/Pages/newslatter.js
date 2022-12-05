import React from 'react';
import './pages.css';

export const newslatter = () => {
  return (
    <div>
        <h2>CSS Newsletter</h2>

    <form action="/action_page.php">
      <div className="container">
        <h2>Subscribe to our Newsletter</h2>
        <p>Lorem ipsum text about why you should subscribe to our newsletter blabla. Lorem ipsum text about why you should subscribe to our newsletter blabla.</p>
      </div>
    
      <div className="container">
        <input type="text" placeholder="Name" name="name" required></input>
        <input type="text" placeholder="Email address" name="mail" required></input>
        <label>
          <input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter</input>
        </label>
      </div>
    </form>
    </div>
  )
}