import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_BOLD};
  font-size: ${({ theme }) => theme.fontSize.LG};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_200};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_REGULAR};
  font-size: ${({ theme }) => theme.fontSize.NM};
`;
