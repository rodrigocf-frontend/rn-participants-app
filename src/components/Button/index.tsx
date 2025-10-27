import { TouchableOpacityProps } from "react-native";
import { Container, ContainerProps } from "./styles";

type Props = TouchableOpacityProps & ContainerProps;

export function Button({ ...args }: Props) {
  return <Container {...args} />;
}
