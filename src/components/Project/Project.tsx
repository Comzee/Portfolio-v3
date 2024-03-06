import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Highlights</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 30 30"
                fill="none"
                stroke="#23ce6b"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Book</title>
                <path
                  d="M15.8,27.3c-2.1-0.9-4.6-1.3-7.3-1.3C6,26,3.3,26.4,0,27.1l-0.2,0.1V8.5L1,8.3v-1L2.4,7V5.8L4,5.7V4.5l0.2,0
		c5,0,8.1,1.1,11.8,4.2c3.7-3,6.8-4.1,11.8-4.2l0.2,0v1.1l1.6,0.1V7L31,7.2v1l1.2,0.3v18.6L32,27.1c-3.2-0.8-6-1.1-8.5-1.1
		c-2.7,0-5.2,0.4-7.3,1.3L16,27.4L15.8,27.3z M23.5,25.4c2.4,0,5.1,0.3,8.1,1V9L31,8.9v16.9l-0.2,0c-2.1-0.3-3.9-0.5-5.6-0.5
		c-0.8,0-1.5,0-2.3,0.1C23.1,25.4,23.3,25.4,23.5,25.4 M0.4,26.4c3-0.7,5.7-1,8.1-1c0.3,0,0.5,0,0.8,0c-0.7-0.1-1.5-0.1-2.3-0.1
		c-1.7,0-3.6,0.2-5.7,0.5l-0.2,0V8.9C0.8,8.9,0.6,9,0.4,9V26.4z M16.3,26.4c2.9-2.5,6.6-3.7,11.1-3.9V5.1c-4.6,0.1-7.5,1.1-11.1,4.1
		V26.4z M4.6,22.5c4.5,0.1,8.1,1.4,11.1,3.9V9.2c-3.5-2.9-6.5-4-11.1-4.1V22.5z M1.6,25.1c1.9-0.3,3.6-0.4,5.1-0.4
		c1.5,0,2.9,0.1,4.3,0.4c-1.8-0.5-3.8-0.8-6-0.8c-0.8,0-1.6,0-2.5,0.1l-0.2,0V7.6L1.6,7.7V25.1z M25.1,24.7c1.6,0,3.3,0.1,5.3,0.4
		V7.7l-0.7-0.1v16.8l-0.2,0c-0.9-0.1-1.7-0.1-2.5-0.1c-2.1,0-4,0.2-5.7,0.7C22.4,24.8,23.7,24.7,25.1,24.7 M28,23.1l-0.2,0
		c-2.8,0.1-5.2,0.5-7.4,1.4c1.9-0.6,4.1-0.9,6.5-0.9c0.7,0,1.4,0,2.1,0.1V6.4l-1-0.1V23.1z M5.1,23.7c2.4,0,4.5,0.3,6.4,0.9
		c-2.1-0.9-4.5-1.4-7.3-1.4l-0.2,0V6.3L3,6.4v17.4C3.7,23.7,4.4,23.7,5.1,23.7"
                ></path>
              </svg>
            </header>
            <div className="body">
              <h3>Anoka Ramsey College</h3>
              <p>
                Graduate - Information Technology
                <br />
                Associates of Science
              </p>
              <p style={{ marginTop: "13.rem" }}>Studies Included:</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Computer Science</li>
                <li>Networking</li>
                <li>Systems Design</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 140 140"
                fill="none"
                stroke="#23ce6b "
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                style={{ overflow: "visible" }}
              >
                <title>Worker</title>
                <path d="M40.91,55.32l-0.27,16.72h17.51c3.71,0,6.74,3.03,6.74,6.74v6.74h-0.07v26.36c0,3.71-3.03,6.74-6.74,6.74 h-6.74V87.46c0-2.95-1.11-1.93-4.45-1.93H31.83v-0.04h-8.64c-5.58,0-10.14-4.56-10.14-10.14V40.18c0-5.67,4.64-10.31,10.31-10.31 h5.1c10.62,0,8.93,7.31,13.63,11.91c4.64,4.54,3.47,5.06,9.81,5.06h13.66c11.31,0,5.23,10.99-1.47,10.65H51.57 C45.99,57.49,45.52,58.38,40.91,55.32L40.91,55.32z M76.48,57.55c-1.63,0-2.95-1.32-2.95-2.95c0-1.63,1.32-2.95,2.95-2.95h18.99 l10.17-20.7c0.71-1.46,2.48-2.06,3.94-1.35c1.46,0.71,2.06,2.48,1.35,3.93l-10.87,22.12c-0.42,1.11-1.5,1.9-2.76,1.9H76.48 L76.48,57.55z M50.09,59.66h57.21c0.33,0,0.6,0.28,0.6,0.6v8.59c0,0.32-0.28,0.6-0.6,0.6h-2.7v52.64c0,0.44-0.36,0.79-0.79,0.79 h-6.79c-0.44,0-0.79-0.36-0.79-0.79V69.45H50.09c-0.32,0-0.6-0.27-0.6-0.6v-8.59C49.49,59.93,49.76,59.66,50.09,59.66L50.09,59.66z M5.54,112.32c0.05-0.41,0.24-0.81,0.55-1.13c2.33-2.35,5.28-4.27,8.65-5.58c2.36-0.92,4.91-1.54,7.59-1.81l-0.51-8.03H3.54 c-1.9,0-3.47-1.56-3.47-3.47c0-14.35,3.38-25.14,0-41.48c-1-4.84,8.99-5.54,8.99,0.26v36.77h34.58c1.91,0,3.46,2.54,3.46,4.45V95 c0,0.42-0.35,0.76-0.76,0.76H27.99l-0.71,7.95c2.84,0.19,5.56,0.77,8.06,1.68c3.22,1.17,6.07,2.9,8.4,5.02 c0.56,0.51,0.76,1.26,0.58,1.95c0.9,0.67,1.48,1.74,1.48,2.95c0,2.04-1.65,3.69-3.69,3.69c-2.04,0-3.68-1.65-3.68-3.69 c0-1.22,0.59-2.3,1.5-2.97c-1.72-1.34-3.73-2.45-5.93-3.25c-2.37-0.87-4.98-1.39-7.73-1.48l-0.4,3.98l-0.02,0.17 c1.56,0.43,2.7,1.86,2.7,3.55c0,2.04-1.65,3.69-3.68,3.69c-2.04,0-3.69-1.65-3.69-3.69c0-1.68,1.13-3.1,2.67-3.54l-0.01-0.19 l-0.28-3.94c-2.63,0.18-5.12,0.74-7.38,1.62h-0.01c-2.2,0.86-4.19,2.02-5.89,3.42c0.68,0.67,1.1,1.6,1.1,2.63 c0,2.04-1.65,3.69-3.68,3.69c-2.04,0-3.69-1.65-3.69-3.69C4,114.08,4.61,112.99,5.54,112.32L5.54,112.32z M35.04,0 c7.79,0,14.1,6.31,14.1,14.1c0,7.79-6.31,14.1-14.1,14.1c-7.79,0-14.1-6.31-14.1-14.1C20.94,6.31,27.25,0,35.04,0L35.04,0z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>14 years professsional technical experience</h3>
              <p>
                Starting my professional career in 2010, I've worked in small,
                to large corporate enviroments.
              </p>
              <p>
                I've implemented a wide range of technologies from TCP/IP
                networking LAN to WAN, to full stack applications, from backend
                to frontend.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 75 75"
                fill="none"
                stroke="#23ce6b "
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style={{ overflow: "visible" }}
              >
                <title>Folder</title>
                <path d="M83,55.38,79.49,79.81A4.92,4.92,0,0,1,73.93,84L49.5,80.47" />
                <line x1="50.97" y1="70.24" x2="49.5" y2="80.47" />
                <line x1="53.7" y1="51.17" x2="52.23" y2="61.41" />
                <path d="M40.89,64.28A5.1,5.1,0,0,1,46.66,60a5,5,0,0,1,2.26.91L49,61a3.74,3.74,0,0,0,3.21.46" />
                <path d="M51,70.24a3.75,3.75,0,0,0-3.22-.47l-.06,0a5,5,0,0,1-2.48.27,5.1,5.1,0,0,1-4.32-5.78" />
                <path d="M63.44,55.91a5,5,0,0,0-.95,2.31,5.1,5.1,0,1,0,9.85-1" />
                <line x1="63.93" y1="52.64" x2="53.7" y2="51.17" />
                <line x1="83" y1="55.38" x2="72.76" y2="53.91" />
                <path d="M72.3,57.12a3.71,3.71,0,0,1,.46-3.21" />
                <path d="M63.93,52.64a3.72,3.72,0,0,1-.46,3.22" />
                <line x1="46.6" y1="45.57" x2="46.6" y2="55.91" />
                <path d="M35.77,60.37a5.11,5.11,0,0,1,7.47-4.52l.11.06a3.73,3.73,0,0,0,3.25,0" />
                <path d="M46.6,75.17H21.92A4.93,4.93,0,0,1,17,70.25V20.89A4.93,4.93,0,0,1,21.92,16H71.28a4.93,4.93,0,0,1,4.91,4.91V45.57" />
                <line x1="17" y1="45.57" x2="27.47" y2="45.57" />
                <line x1="36.39" y1="45.57" x2="46.6" y2="45.57" />
                <line x1="46.6" y1="26.32" x2="46.6" y2="15.98" />
                <line x1="46.6" y1="45.57" x2="46.6" y2="35.24" />
                <line x1="46.6" y1="73.18" x2="46.6" y2="75.17" />
                <polyline points="56.93 45.57 46.6 45.57 46.6 55.91" />
                <line x1="76.19" y1="45.57" x2="65.85" y2="45.57" />
                <path d="M36.39,45.57a3.74,3.74,0,0,1,0-3.25l0,0a5.1,5.1,0,1,0-9-.05l.06.1a3.74,3.74,0,0,1,0,3.25" />
                <path d="M46.6,35.24a3.7,3.7,0,0,1,3.25,0l0,0a5.09,5.09,0,1,0,.05-9l-.1.06a3.74,3.74,0,0,1-3.25,0" />
                <path d="M37.6,64.28a5.1,5.1,0,0,1,5.64-8.43l.11.06a3.73,3.73,0,0,0,3.25,0" />
                <path d="M66.46,50.74a5,5,0,0,0-.55-1.81l-.06-.11a3.73,3.73,0,0,1,0-3.25" />
                <path d="M56.93,45.57a3.75,3.75,0,0,1,.17,2.87" />
              </svg>
            </header>
            <div className="body">
              <h3>Personal Interests</h3>
              <p>
                I'm an avid photographer, spending countless hours learning and
                perfecting the craft to capture the best images.
              </p>
              <p>
                High Fidelity audio, from soldering to picking the best parts
                for my amplifiers.
              </p>
              <p>
                Technologiest - A deep passion for anything related to
                computing. From personal home labs, to keeping up on the lastest
                technical trends of the day.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
