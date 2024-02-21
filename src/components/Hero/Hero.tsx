import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import SamJesberg from "../../assets/SamJesberg.png";

export function Hero() {
  return (
    <Container id="home" style={{ display: "flex" }}>
      <div style={{ display: "flex", flex: "2" }}>
        <div className="hero-text">
          <ScrollAnimation animateIn="fadeInUp">
            <p>
              Hello <img src={Hello} alt="Hello" width="20px" />, I'm
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h1>Samuel Jesberg</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>Full Stack Developer</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <p className="small-resume">4 Years of Experience</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">
                Contact
              </NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://api.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="Whatsapp" />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div
        className="hero-image"
        style={{ display: "flex", flex: "1", margin: "auto" }}
      >
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img
            src={SamJesberg}
            alt="headshot"
            style={{ transform: "scale(0.8)" }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
