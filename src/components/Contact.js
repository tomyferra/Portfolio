import React from "react";
import { useState } from "react";
import '../stylesheets/Contact.css'
import emailjs from '@emailjs/browser';



function Contact () {

  const [values, setValues] = useState({name:"", emailAddress:"", message:""});

  function handleSubmit (event) {
    event.preventDefault();
    console.log(values)
    var templateParams = {name: values.name, emailAddress: values.emailAddress, message:values.message};
    emailjs.send('service_8fe3vzj','template_zktlvwp',templateParams,'R2V9o4aeqtE1jr_RJ')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
    setValues({name:"", emailAddress:"", message:""});
  }

  function handleChange (evt) {
    const value = evt.target.value;

    setValues({
      ...values,
      [evt.target.id]: value});

    
  }

  return(
    <div id='Contact' className="container-fluid contact-container">
      <div className="row text-center">
        <div className="contact-title">
          <h1>Contact me</h1>
        </div>
        <div className="contact-subtitle">
          <h3>If you are interested to reaching out to me, please fill in the form</h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-sm-12 contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            {/* Name input */}
            <div class="mb-3">
              <label class="form-label" htmlFor="name">Name</label>
              <input class="form-control" id="name" type="text" placeholder="Name" onChange={handleChange}/>
            </div>
            {/* Email address input */}
            <div class="mb-3">
              <label class="form-label" htmlFor="emailAddress">Email Address</label>
              <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" onChange={handleChange} />
            </div>
            {/* Message input  */}
            <div class="mb-3">
              <label class="form-label" htmlFor="message">Message</label>
              <textarea class="form-control" id="message" type="text" placeholder="Message" style={{"height": "10rem"}} onChange={handleChange}></textarea>
            </div>
            {/* Form submit button */}
            <div class="d-grid">
              <button class="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 social-media " style={{"margin-bottom": "30px"}}>
          <div className="row text-center align-middle" style={{ "align-items": "center"}}>
            <div className="github col-sm-3" style={{"margin": "10px 0 10px 0"}}>
              <a href="https://github.com/tomyferra" target='_blank' rel='noreferrer' className="social-media-links">
                <i class="bi bi-github"> Github</i>
              </a>
            </div>
            <div className="mail col-sm-3" style={{"margin": "10px 0 10px 0"}}>
              <a href="mailto:ferra.tomy@gmail.com" className="social-media-links">
                <i class="bi bi-envelope"> Email</i>
              </a>
            </div>
            <div className="whatsapp col-sm-3" style={{"margin": "10px 0 10px 0"}}>
              <a href="https://wa.me/5491169002457?text=Hello%20Tomas.%20I%27m%20reaching%20out%20from%20your%20portfolios%20page.%20My%20name%20is%20" className="social-media-links">
                <i class="bi bi-whatsapp"> Whatsapp</i>
              </a>
            </div>
            <div className="linkedin col-sm-3" style={{"margin": "10px 0 10px 0"}}>
              <a href='https://www.linkedin.com/in/tomasmariaferrari/' target='_blank' rel='noreferrer' className="social-media-links">
                <i class="bi bi-linkedin"> LinkedIn</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;