import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "styled-components/native";
import { Highlight } from "../../components/Highlight";
import { ListItem } from "../../components/ListItem";
import { Container, Title, TitleContainer, WrapperInput } from "./styles";
import { Alert, FlatList } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";
import type { StaticScreenProps } from "@react-navigation/native";
import { useContext, useState } from "react";
import { EventsContext, Participant } from "../../store/EventsProvider";

type Props = StaticScreenProps<{
  id: string;
  name: string;
  date: string;
}>;

export function Participants({ route }: Props) {
  const { date, name, id } = route.params;

  const theme = useTheme();
  const { events, addParticipant, removeParticipant } =
    useContext(EventsContext);
  const [participantName, setParticipantName] = useState("");

  const handleAddParticipant = () => {
    if (participantName.length < 1) {
      return Alert.alert(
        "Nome de participante inválido",
        "Nome de participante deve ter no mínimo 1 caracter."
      );
    }

    return Alert.alert("Adicionar", `Adicionar ${participantName} no evento?`, [
      {
        text: "Sim",
        onPress: () => {
          addParticipant(id, { name: participantName.trim() });
          setParticipantName("");
        },
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  };

  const handleDeleteEvent = (participant: Participant) =>
    removeParticipant(id, participant.id);

  const searchedEvent = events.filter((item) => item.id === id)[0];

  return (
    <Container>
      <Highlight title={name} subtitle={date} />
      <WrapperInput>
        <InputText
          placeholder="Nome do participante"
          value={participantName}
          onChangeText={setParticipantName}
        />
        <Button variant="GREEN_900" onPress={handleAddParticipant}>
          <MaterialIcons name="add" size={24} color={theme.color.WHITE} />
        </Button>
      </WrapperInput>
      <TitleContainer>
        <Title>Participantes</Title>
      </TitleContainer>
      <FlatList
        data={searchedEvent.participants}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onRemove={() => handleDeleteEvent(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty
            text="Ninguém chegou no evento ainda? 
Adicione participantes a sua lista de presença."
          />
        }
      />
    </Container>
  );
}
