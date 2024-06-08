"use client";
import React from "react";

import { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc(event: Event) {
      let target = event.target as HTMLInputElement;
      let parent = target.parentNode;
      if (parent && parent instanceof HTMLElement) {
        parent.classList.add("focus");
      }
    }

    function blurFunc(event: Event) {
      let target = event.target as HTMLInputElement;
      let parent = target.parentNode;
      if (parent && parent instanceof HTMLElement) {
        if (target.value == "") {
          parent.classList.remove("focus");
        }
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc as EventListener);
      input.addEventListener("blur", blurFunc as EventListener);
    });

    // Cleanup listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc as EventListener);
        input.removeEventListener("blur", blurFunc as EventListener);
      });
    };
  }, []);
  return null;
  // ... rest of your component
};

const Form = () => {
  return (
    <>
      <MyComponent />
      <div className="container">
        <span className="big-circle" />
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" defaultValue={""} />
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" defaultValue="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
