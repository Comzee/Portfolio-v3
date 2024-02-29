import styled from "styled-components";

export const CenterDiv = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  justifycontent: center;
  transform: translate(-50%);

  @media (max-width: 768px) {
    position: static;
    order: -1;
    transform: none;
  }
`;

export const LeftSideDiv = styled.div`
  display: flex;
  justifycontent: center;
`;

export const Socials = styled.div`
  left: 25%;
  display: flex;
  justifycontent: center;
  transform: translate(-25%);
  gap: 1rem;

  img,
  span {
    font-size: 3rem;
    width: 3rem;
  }
`;

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    font-size: 2.8rem;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 800px) {
    // padding: 4rem 10rem;
    flex-direction: column;
    // gap: 2rem;
    // text-align: center;
  }
  @media (max-width: 600px) {
    padding: 4rem 1rem;
    p {
      font-size: 1.2rem;
    }
  }
`;
