import { Container, Title, Button, Wrapper } from "./styles";

type Props = {
  value: [string];
  buttons: {
    onPress: () => void;
    title: string;
    buttonValue: string;
  }[];
};

export function Filter({ value, buttons }: Props) {
  return (
    <Container>
      <Title>Ordenar por:</Title>
      <Wrapper>
        {buttons.map(({ onPress, title, buttonValue }, index) => (
          <Button
            isActive={value[0] === buttonValue}
            key={`filter_button_${index}`}
            onPress={onPress}
          >
            <Title>{title}</Title>
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
}
