import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export function Contact() {
  const [isVerified, setIsVerified] = useState(false);

  const renderCaptchaMessage = () => {
    if (!isVerified) {
      return <p>Solve the Captcha to see contact details</p>;
    }
    return null;
  };

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        {renderCaptchaMessage()}
      </header>
      {!isVerified ? (
        <div className="recaptcha-container">
          <ReCAPTCHA
            sitekey="6LfasoMpAAAAAHpMYLXFncm9IQeZhj3iceL9vqVs"
            onChange={() => setIsVerified(true)}
          />
        </div>
      ) : (
        <div className="contacts">
          <div>
            <a href="mailto:samjesberg@gmail.com">
              <img src={emailIcon} alt="Email" />
            </a>
            <a href="mailto:samjesberg@gmail.com">sam.jesberg@gmail.com</a>
          </div>
          <div>
            <a href="tel:(612) 220-5759">
              <img src={phoneIcon} alt="Phone No" />
            </a>
            <a href="tel:(612) 220-5759">(612) 220-5759</a>
          </div>
        </div>
      )}
      <Form />
    </Container>
  );
}
