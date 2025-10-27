import styled from "styled-components/native";

export const Container = styled.View`
  margin: 28px 0 0 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_REGULAR};
  font-size: ${({ theme }) => theme.fontSize.SM};
  text-align: center;
`;
