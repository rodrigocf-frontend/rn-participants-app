import styled from "@emotion/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.GRAY_100};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.RED_900};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_BOLD};
  font-size: ${({ theme }) => theme.fontSize.LG};
`;
