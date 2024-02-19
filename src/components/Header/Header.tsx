import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";

import CV from "../../assets/CV_VinayakSingh.pdf";
import SunIcon from "../../assets/sun-regular.svg"; // Assuming the path to your SVG
import MoonIcon from "../../assets/moon-solid.svg"; // Assuming the path to your SVG

export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true); // Use a boolean state for theme

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    setIsLightTheme(!isLightTheme); // Toggle theme state
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={CV} download className="button">
            CV
          </a>
        </nav>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        {/* Conditionally render SVG based on theme */}
        {isLightTheme ? (
          <img src={SunIcon} alt="Dark Mode" />
        ) : (
          <img src={MoonIcon} alt="Light Mode" />
        )}
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
