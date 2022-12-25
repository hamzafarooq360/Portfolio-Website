import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g7be7v8', 'template_i5bpisp', form.current, 'mpOSKj29WjAmF0WDc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hamzafarooq6995@gmail.com</h5>
            <a className='btn btn-primary' href="mailto:hamzafarooq6995@gmail.com" target="_blank">Send Email</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+15148036995</h5>
            <a className='btn btn-primary' href="https://api.whatsapp.com/send?phone=15148036995" target="_blank">Send Message</a>
          </article>

        </div>
        <form ref={form} className='messageform' onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <input type="text" name='name' placeholder="Your Message" required />
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact
