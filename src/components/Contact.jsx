"use client"

import Heading from "./sub/Heading"
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <div 
    id='contact'
    className="min-h-screen py-20 ">
      <Heading text="Get in touch" />
      <section className="contact" id="contact">
        <div className="container">
          <div className="content dark:bg-zinc-700 transition-colors">
            <div className="image-box">
              <img  draggable="false" src="/Assets/contact1.png" alt="contact" />
            </div>
            <form id="contact-form">
              <div className="form-group">
                <div className="field">
                  <input type="text" name="name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                
                <button className="cta">
                  <span className="hover-underline-animation"> Submit </span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact