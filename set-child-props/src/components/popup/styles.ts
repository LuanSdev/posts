import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity  : 0;
  }

  100% {
    opacity  : 1;
  }
`;

export const Container = styled.div`
  width: 60vw;
  height: 80vh;

  animation: ${fadeIn} 0.4s ease forwards;

  background-color: #363a4950;
  backdrop-filter: blur(30px);
  box-shadow: 0 0 42px rgba(0, 0, 0, 0.2), -3px 3px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 52px;
    color: #fff;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  padding: 26px 0;

  > button {
    width: 200px;
    height: 60px;

    border-radius: 10px;
    border: none;
    background-image: linear-gradient(45deg, #b7d129, #df6f0f, #ff1b6b);

    font-size: 18px;
    font-weight: 600;
    color: #fff;

    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
      background-image: linear-gradient(90deg, #b7d129, #df6f0f, #ff1b6b);
    }

    &:active {
      opacity: 0.8;
      transform: scale(1);
    }
  }
`;
