import { TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps;

export function InputText({ ...args }: Props) {
  return <Container {...args} />;
}
