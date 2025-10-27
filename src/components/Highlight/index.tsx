import { Container, Subtitle, Title } from "./styles";

interface Props {
  title: string;
  subtitle?: string;
}

export function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      {subtitle && <Subtitle>Sexta, 4 de Novembro de 2022.</Subtitle>}
    </Container>
  );
}
