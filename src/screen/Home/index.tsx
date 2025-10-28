import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "styled-components/native";
import { Highlight } from "../../components/Highlight";
import { ListItem } from "../../components/ListItem";
import {
  Container,
  DateContainer,
  Title,
  TitleContainer,
  WrapperInput,
} from "./styles";
import { Alert, FlatList } from "react-native";
import { InputDate } from "../../components/InputDate";
import { useNavigation } from "@react-navigation/native";
import { ListEmpty } from "../../components/ListEmpty";
import { useContext, useState } from "react";
import { EventType, EventsContext } from "../../store/EventsProvider";

import { TZDate } from "@date-fns/tz";
import {
  formatNumberToLocale,
  formatTZDateToLocale,
} from "../../utils/date-format";

export function Home() {
  const theme = useTheme();
  const { events, addEvent, removeEvent } = useContext(EventsContext);
  const navigation = useNavigation();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState<TZDate>(new TZDate());

  const handleAddEvent = () => {
    if (eventName.length < 1) {
      return Alert.alert(
        "Nome de evento inválido",
        "Nome de evento deve ter no mínimo 1 caracter."
      );
    }

    const selectedDate = formatTZDateToLocale(eventDate);
    const hasEventInTheSameDate = events.filter(
      (item) => item.date === selectedDate
    );

    if (hasEventInTheSameDate.length > 0) {
      return Alert.alert(
        "Evento inválido",
        "Não se pode ter  eventos na mesma data."
      );
    }

    return Alert.alert(
      "Adcionar",
      `Criar evento ${eventName}, no dia ${formatTZDateToLocale(eventDate)}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            addEvent({
              date: formatTZDateToLocale(eventDate),
              name: eventName.trim(),
            });
            setEventName("");
            setEventDate(new TZDate());
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  const handleDeleteEvent = (event: EventType) => removeEvent(event.id);
  const subtitleHighlight = formatNumberToLocale(Date.now());

  return (
    <Container>
      <Highlight title="Cadastrar evento" subtitle={subtitleHighlight} />
      <WrapperInput>
        <InputText
          placeholder="Nome do evento"
          onChangeText={setEventName}
          value={eventName}
        />
        <Button variant="GREEN_900" onPress={handleAddEvent}>
          <MaterialIcons name="add" size={24} color={theme.color.WHITE} />
        </Button>
      </WrapperInput>
      <DateContainer>
        <InputDate onChange={setEventDate} value={eventDate} />
      </DateContainer>
      <TitleContainer>
        <Title>Eventos</Title>
      </TitleContainer>
      <FlatList
        data={events}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              navigation.navigate("Participants", {
                date: item.date,
                id: item.id,
                name: item.name,
              })
            }
            title={item.name}
            subtitle={`${item.date}, participantes: ${item.participants.length}`}
            onRemove={() => handleDeleteEvent(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty
            text="Nenhum evento criado ainda? 
Adicione eventos a sua lista."
          />
        }
      />
    </Container>
  );
}
