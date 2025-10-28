import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.GRAY_400};
  padding: 24px 24px;
`;

export const WrapperInput = styled.View`
  flex-direction: row;
  align-self: stretch;
  gap: 7px;
  margin: 34px 0 16px 0;
`;

export const DateContainer = styled.View`
  align-items: center;
  margin-right: auto;
`;

export const WrapperFilter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  margin: 42px 0 16px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO_BOLD};
  font-size: ${({ theme }) => theme.fontSize.MD};
`;
