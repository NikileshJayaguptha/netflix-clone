import React, { useState, useEffect } from "react";
import "./nav.css";
function Nav() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`Nav ${show && "navblack"}`}>
      <img
        className="n_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="n_avatar "
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
