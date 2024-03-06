import styled from "styled-components";

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 992px) {
    position: static;
    transform: none;
    width: 100%;
  }
`;

export const LeftSideDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

  @media (max-width: 1200px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding: 3rem 2rem;

    ${LeftSideDiv}, ${CenterDiv}, ${Socials} {
      width: 100%;
      justify-content: center;
    }
  }
`;