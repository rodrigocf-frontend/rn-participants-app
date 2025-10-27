import { Container, Title } from "./styles";

interface Props {
  text: string;
}

export function ListEmpty({ text }: Props) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
}
