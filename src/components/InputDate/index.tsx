import {
  DateTimePickerAndroid,
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { Value, Button, Container } from "./styles";
import dayjs, { Dayjs } from "dayjs";
import { formatDate } from "../../utils/date-format";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  value: Dayjs;
}

export function InputDate({ onChange, value }: Props) {
  const theme = useTheme();
  const [date, setDate] = useState(formatDate(value));

  const handleShow = () => {
    DateTimePickerAndroid.open({
      value: date.toDate(),
      onChange: handleChange,
      mode: "date",
      is24Hour: true,
    });
  };

  const handleChange = (_: DateTimePickerEvent, date?: Date) => {
    if (date) {
      const utcDate = formatDate(dayjs(date));
      onChange(utcDate);
    }
  };

  useEffect(() => {
    const utcDate = formatDate(dayjs(value));
    setDate(utcDate);
  }, [value]);

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
