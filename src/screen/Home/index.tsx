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
import dayjs, { Dayjs } from "dayjs";
import { formatDate } from "../../utils/date-format";

export function Home() {
  const theme = useTheme();
  const { events, addEvent, removeEvent } = useContext(EventsContext);
  const navigation = useNavigation();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState<Dayjs>(dayjs());

  const handleAddEvent = () => {
    if (eventName.length <= 1) {
      return Alert.alert(
        "Nome de evento inválido",
        "Nome de evento deve ter no mínimo 1 caracter."
      );
    }

    return Alert.alert(
      "Adcionar",
      `Criar evento ${eventName}, no dia ${eventDate.format("DD/MM/YYYY")}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            addEvent({
              date: formatDate(eventDate).format("DD/MM/YYYY"),
              name: eventName.trim(),
            });
            setEventName("");
            setEventDate(dayjs());
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

  return (
    <Container>
      <Highlight
        title="Cadastrar evento"
        subtitle={formatDate(dayjs()).format("DD/MM/YYYY")}
      />
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
            subtitle={item.date}
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
