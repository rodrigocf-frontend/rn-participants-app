import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.GRAY_300};
  margin: 0 0 10px 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 0 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_REGULAR};
  font-size: ${({ theme }) => theme.fontSize.NM};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_200};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_REGULAR};
  font-size: ${({ theme }) => theme.fontSize.SM};
`;
