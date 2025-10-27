import {
  DateTimePickerAndroid,
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Value, Button, Container } from "./styles";
import dayjs from "dayjs";
import { formatDate } from "../../utils/date-format";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export function InputDate() {
  const theme = useTheme();
  const [date, setDate] = useState(formatDate(dayjs()));

  const handleShow = () => {
    DateTimePickerAndroid.open({
      value: dayjs(date).toDate(),
      onChange: handleChange,
      mode: "date",
      is24Hour: true,
    });
  };

  const handleChange = (_: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setDate(formatDate(dayjs(date)));
    }
  };

  return (
    <Container>
      <Button onPress={handleShow}>
        <Value>{date.format("DD/MM/YYYY")}</Value>
        <MaterialIcons
          size={24}
          name="calendar-month"
          color={theme.color.GRAY_100}
        />
      </Button>
    </Container>
  );
}
