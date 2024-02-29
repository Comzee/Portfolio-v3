import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useCallback, useState } from "react";

import CV from "../../assets/Sam_Jesberg_Resume.pdf";
import SunIcon from "../../assets/sun-regular.svg";
import MoonIcon from "../../assets/moon-solid.svg";

export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    setIsLightTheme(!isLightTheme);
  }

  function closeMenu() {
    setActive(false);
  }

  const toggleMenu = useCallback(() => setActive((prev) => !prev), [setActive]);

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
            Resume
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
        <div
          style={{
            marginRight: "1rem",
          }}
        >
          {isLightTheme ? (
            <img src={SunIcon} alt="Dark Mode" />
          ) : (
            <img src={MoonIcon} alt="Light Mode" />
          )}
        </div>
        <button
          onClick={toggleMenu}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <div className="menu-container">
            <div
              aria-expanded={isActive ? "true" : "false"}
              aria-haspopup="true"
              aria-label={isActive ? "Fechar menu" : "Abrir menu"}
              className={isActive ? "menu active" : "menu"}
            ></div>
          </div>
        </button>
      </Router>
    </Container>
  );
}
