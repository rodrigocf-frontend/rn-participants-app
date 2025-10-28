import {
  DateTimePickerAndroid,
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { Value, Button, Container } from "./styles";
import { formatTZDateToLocale } from "../../utils/date-format";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TZDate } from "@date-fns/tz";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<TZDate>>;
  value: TZDate;
}

export function InputDate({ onChange, value }: Props) {
  const theme = useTheme();
  const [date, setDate] = useState(value);

  const handleShow = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: handleChange,
      mode: "date",
      is24Hour: true,
    });
  };

  const handleChange = (_: DateTimePickerEvent, date?: Date) => {
    if (date) {
      const utcDate = new TZDate(date);
      onChange(utcDate);
      setDate(utcDate);
    }
  };

  useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <Container>
      <Button onPress={handleShow}>
        <Value>{formatTZDateToLocale(date)}</Value>
        <MaterialIcons
          size={24}
          name="calendar-month"
          color={theme.color.GRAY_100}
        />
      </Button>
    </Container>
  );
}
