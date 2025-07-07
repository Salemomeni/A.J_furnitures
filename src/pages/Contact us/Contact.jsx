import React, { useState } from 'react';
import './contact.css';
import './contact.css'
import Button from '../../component/buttton/Button';
import {
    validateName,
     validateMessage
} from '../../component/authentication/validation.js'
const Contact = () => {
  const [name , setName] = useState('')
  const [message , setMessage] = useState('')
  const [email , setEmail] = useState('')

  const [nameErr , setNameErr] = useState('')
  const [ messageErr , setMessageErr] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    const isnameValid = validateName(name , setNameErr)
    const ismessageValid = validateMessage(message , setMessageErr)
    if(isnameValid && ismessageValid){
      const send = {
        name,
        message,
        email
      }
      console.log(send)
      alert('sent')
    }
  }
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether it’s a question, feedback or project inquiry — feel free to reach out.</p>
      </div>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" required 
          value={name}
          onChange={(e) => setName(e.target.value)}  />
          <p className='text-danger'>{nameErr}</p>
          <label>Email</label>
          <input type="email" placeholder="Your email" required  
          value={email}
          onChange={(e)=>setEmail(e.target.value)} />

          <label>Message</label>
          <textarea placeholder="Your message..." rows="6" required 
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
          <p>{messageErr}</p>

          <Button btnStyle="explore1">Send Message</Button>
        </form>

        <div className="contact-details">
          <h2>Our Office</h2>
          <p>123 AJ's Street, Furniture City,<br />Lagos, Nigeria</p>

          <h3>Email</h3>
          <p>support@ajfurni.com</p>

          <h3>Phone</h3>
          <p>+234 800 123 4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
