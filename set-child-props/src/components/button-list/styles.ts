import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 140px;
  align-items: center;

  width: 100%;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

    color: #fff;
    font-size: 34px;

    border-radius: 10px;
    border: none;
    box-shadow: -3px 3px 15px rgba(0, 0, 0, 0.4);

    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const RectButton = styled.button`
  aspect-ratio: 5/4;
  background: #673ab7;

  && {
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`;

export const SquareButton = styled.button`
  aspect-ratio: 1/1;
  background: #ffeb3b;
`;

export const CircleButton = styled.button`
  aspect-ratio: 1/1;
  background: #e91e63;

  && {
    border-radius: 50%;
  }
`;
