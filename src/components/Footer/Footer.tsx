import { Container, CenterDiv, LeftSideDiv, Socials } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";

export function Footer() {
  return (
    <Container className="footer">
      <LeftSideDiv>
        <a href="https://samjesberg.com" className="logo">
          <div>
            <span>www.sam</span>
            <span>jesberg.com</span>
          </div>
        </a>
      </LeftSideDiv>
      <CenterDiv>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </CenterDiv>
      <Socials>
        <a
          href="https://www.linkedin.com/in/sam-jesberg-52a6aa54/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
      </Socials>
    </Container>
  );
}