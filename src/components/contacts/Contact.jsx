import React from 'react'
import "./contact.css"

import {MdOutlineEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {FaViber} from "react-icons/fa"
import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s2ghjwc', 'template_trmd3vi', form.current, 'OQfRvJE0VA1m2EdMt')
    e.target.reset() 
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>jutusss@gmail.com</h5>
              <a href="mailo:justusss@gmail.com"> Send a Message</a>
            </article>
            <article className="contact__option">
              <BsMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Justinas Sinkevicius</h5>
              <a href="https://m.me/justinas.sinkevicius"> Send a Message</a>
            </article>
            <article className="contact__option">
              <FaViber className='contact__option-icon'/>
              <h4>Viber</h4>
              <h5>+37060005175</h5>
              
              <a href="viber://chat?number=37060005175" className="viber-mobile">Text to Viber (Mobile)</a>
              <a href="viber://chat?number=+37060005175" className="viber-desktop">Text to Viber (Desktop)</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="messaage" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>


    </section>
  )
}

export default Contact