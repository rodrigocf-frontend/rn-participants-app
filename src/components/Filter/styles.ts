import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 5px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2px;
`;

type ButtonProps = {
  isActive: boolean;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 12px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.GREEN_900 : theme.color.GRAY_300};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_BOLD};
  font-size: ${({ theme }) => theme.fontSize.XSM};
`;
