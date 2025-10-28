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
  WrapperFilter,
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
import _ from "lodash";
import { Filter } from "../../components/Filter";
import { isEqual, isSameDay } from "date-fns";

export function Home() {
  const theme = useTheme();
  const { events, addEvent, removeEvent } = useContext(EventsContext);
  const navigation = useNavigation();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState<TZDate>(new TZDate());
  const [filter, setFilter] = useState<[string]>(["date"]);

  const handleAddEvent = () => {
    if (eventName.length < 1) {
      return Alert.alert(
        "Nome de evento inválido",
        "Nome de evento deve ter no mínimo 1 caracter."
      );
    }

    const selectedDate = eventDate.toISOString();
    const hasEventInTheSameDate = events.filter((item) =>
      isSameDay(selectedDate, item.date)
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
              date: eventDate.toISOString(),
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

  const handleFilter = (value: [string]) => setFilter(value);

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
      <WrapperFilter>
        <TitleContainer>
          <Title>Eventos</Title>
        </TitleContainer>
        <Filter
          value={filter}
          buttons={[
            {
              onPress: () => handleFilter(["date"]),
              title: "Data",
              buttonValue: "date",
            },
            {
              onPress: () => handleFilter(["name"]),
              title: "Nome",
              buttonValue: "name",
            },
          ]}
        />
      </WrapperFilter>
      <FlatList
        data={_.orderBy(events, filter, ["asc"])}
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
            subtitle={`${formatTZDateToLocale(
              new TZDate(item.date)
            )}, participantes: ${item.participants.length}`}
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
