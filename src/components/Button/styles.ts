import { TouchableOpacity } from "react-native";
import styled, { type AppColors, withTheme } from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export interface ContainerProps {
  variant?: AppColors;
}

export const Container = styled(TouchableOpacity).attrs<ContainerProps>({
  activeOpacity: 1,
})`
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ theme, variant = "GREEN_900" }) =>
    theme.color[variant]};
`;
