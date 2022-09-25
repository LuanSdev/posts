import { Container, Content, Footer } from './styles';

interface IPopup {
  onConfirm(): void;
}

export function Popup(props: IPopup) {
  return (
    <Container {...props}>
      <Content>
        <span>Hello world!</span>
      </Content>

      <Footer>
        <button onClick={props.onConfirm}>OK</button>
      </Footer>
    </Container>
  );
}
