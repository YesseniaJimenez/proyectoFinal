import React from "react";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoSlogan">
        <img
          src={logo}
          id="logoFooter"
          alt="DB🎷"
          className="logo"
          width={80}
          height={50}
        />
        <p className="Pfooter">Lleva la musica con vos</p>
      </div>
      {/*<img src="logoconSlogan.png" id="logoFooter" alt="DB🎷" width={200} />*/}
      <p className="copyright">© 2023 Digital Booking</p>
    </footer>
  );
};

export default Footer;
