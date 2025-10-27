import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
`;

export const Button = styled(Pressable)`
  background-color: ${({ theme }) => theme.color.GRAY_300};
  border-radius: 4px;
  padding: 16px;
  flex-direction: row;
  gap: 25px;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.SM};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.color.GRAY_100};
`;
