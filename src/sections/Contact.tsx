import React from "react";

export const ContactSection = () => {
  return(
    <div id="contact" className="spacing items-center md:gap-20">
      <div className="flex flex-col justify-start gap-3">
        <h1 className="text-4xl font-semibold text-text">
          Contact Me
        </h1>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-2 text-background"
        >
          <input type="hidden" name="access_key" value="8061532d-acda-4556-a05a-a2e562303e62"></input>

          <input 
            type="text" 
            name="name" 
            placeholder="Your Name ..."
            className="contact-fields"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email ..."
            className="contact-fields"
          />
          <textarea 
            name="message" 
            placeholder="Your Message ..."
            className="contact-fields"
          />
          <button type="submit" className="p-2 border rounded-full text-heading font-bold hover:bg-text/20 transition duration-300 mt-3">
            Submit
          </button>
          
        </form>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-2xl text-text">
          Or, feel free to reach out at
        </p>
        <p className="text-xl text-heading">
          harshadeepk02@gmail.com
        </p>
      </div>
    </div>
  )
};
