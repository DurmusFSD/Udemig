/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Back from "../common/back/Back";
import "./Contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179733.355233093!2d33.613794230010306!3d38.89635045000029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407f9a3f6fe7f88f%3A0x10349b615a27094e!2zRGVyZWRvxJ9hbiwgNjY2NTIgRGVyZWRvxJ9hbi9TYXLEsWtheWEvWW96Z2F0!5e0!3m2!1str!2str!4v1695202266795!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';

//  <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  return (
    <>
      <Back title="Contact Us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Türkiye Yozgat Sarıkaya Deredogan Village</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> durmusozgul66@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +90 545 123 12 34</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
