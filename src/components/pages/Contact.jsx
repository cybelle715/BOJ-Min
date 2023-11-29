import React from "react";
import "./Contact.css";
export const Contact = () => {
  return(  <div>
    <h1>Contact</h1>
    <div className="container">
    <div className="message">
      <p>
        Hi please leave us your <b>message</b>
      </p>
      
      <form action="">
        <input type="text" placeholder="name"/>
        <input type="email" name="email" placeholder="email" />
        <input type="text" placeholder="your message"/>
        <button type="submit">Send</button>
      </form>

    </div>
    </div>
    <div className="contact">
      <p>
        <h3 className="head">email</h3>
      <h3>keffehcollins@gmail.com</h3>
      </p>
      <p>
        <h3 className="head">Phone</h3>
        <h3>+52 387 378</h3>
      </p>
      <p>
        <h3 className="head">Address</h3>
        <h3>Yucatam, Mexico</h3>
      </p>
    </div>
    
  </div>
  
  );
};
