import { Container } from "./styles";
//SVG block
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import javaIcon from "../../assets/Java.svg";
import springIcon from "../../assets/Spring_Boot.svg";
import apacheIcon from "../../assets/Apache.svg";
import mysqlIcon from "../../assets/MySQL.svg";
import awsIcon from "../../assets/Aws.svg";
//Animation Library
import ScrollAnimation from "react-animate-on-scroll";
//Portfolio Image
import SamJesberg from "../../assets/illustration.png";

export function About() {
  return (
    <Container id="about" style={{ display: "flex" }}>
      <div style={{ display: "flex", flex: "2" }}>
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About me</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p>
              Hi there! I'm Sam, a full stack developer with a passion for
              creating custom applications for my clients. With a skill set
              including Java, Spring, SQL, REACT, TypeScript, and CSS. I have
              the tools to bring any vision to life.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.3 * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p>
              As a full stack developer, I thrive on transforming complex
              business challenges into seamless digital solutions. Whether
              you're looking to innovate your enterprise systems, enhance your
              operational efficiency, or simply elevate your corporate digital
              infrastructure, I'm here to guide and support your journey.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.2 * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p>
              But my services go beyond just development - I'm also proficient
              in using Cisco Unified products and TCP/IP networking.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>Here are my main skills:</h3>
          </ScrollAnimation>
          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <img src={javaIcon} alt="Java" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
                <img src={springIcon} alt="Spring" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={reactIcon} alt="React" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                <img src={typescriptIcon} alt="Typescript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
                <img src={vueIcon} alt="Vue" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                <img src={htmlIcon} alt="Html" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                <img src={cssIcon} alt="Css" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={apacheIcon} alt="Apache" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={mysqlIcon} alt="MySQL" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={awsIcon} alt="AWS" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      <div className="about-image" style={{ display: "flex", flex: "1" }}>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={SamJesberg} alt="Developer Computer" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
