import { Modal } from '../modal';
import { Container, RectButton, SquareButton, CircleButton } from './styles';

export function ButtonList() {
  return (
    <Container>
      <Modal>
        <SquareButton>1</SquareButton>
      </Modal>

      <Modal>
        <RectButton>2</RectButton>
      </Modal>

      <Modal>
        <CircleButton>3</CircleButton>
      </Modal>
    </Container>
  );
}
