import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Place holder sentance XYZ </p>
        <p>Contact me now XYZ</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:samjesberg@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:samjesberg@gmail.com">Sam.Jesberg@Gmail.com</a>
        </div>
        <div>
        <a href="tel:(612) 220-5759"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:(612) 220-5759">(612) 220-5759</a>
        </div>  
      </div>
      {/* Need to think about bot protection here */}
      <Form></Form>
    </Container>
  )
}