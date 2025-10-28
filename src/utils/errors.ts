import { Alert } from "react-native";

export const AppError = (e: unknown) => {
  if (e instanceof Error) {
    return Alert.alert(e.name, e.message);
  }
};
