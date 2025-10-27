import styled from "styled-components/native";

export const Container = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.color.GRAY_200,
}))`
  background-color: ${({ theme }) => theme.color.GRAY_300};
  border-radius: 4px;
  padding: 18px 16px;
  font-size: ${({ theme }) => theme.fontSize.SM};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.color.GRAY_100};
  flex: 1;
`;
