import { PropsWithChildren, createContext, useState } from "react";

export type Participant = {
  id: string;
  name: string;
};

export type EventType = {
  id: string;
  name: string;
  date: string;
  participants: Participant[];
};

type AddEventParams = Omit<EventType, "id" | "participants">;
type AddParticipantParams = Omit<Participant, "id">;

type EventStateType = {
  events: EventType[];
  event_nextId: number;
  participant_nextId: number;
  addEvent: (event: AddEventParams) => void;
  removeEvent: (id: string) => void;
  addParticipant: (eventId: string, participant: AddParticipantParams) => void;
  removeParticipant: (eventId: string, id: string) => void;
};

const initialState: EventStateType = {
  events: [],
  event_nextId: 1,
  participant_nextId: 1,
  addEvent: (event: AddEventParams) => {},
  removeEvent: (id: string) => {},
  addParticipant: (eventId: string, participant: AddParticipantParams) => {},
  removeParticipant: (eventId: string, id: string) => {},
};

export const EventsContext = createContext(initialState);

export function EventsProvider({ children }: Readonly<PropsWithChildren>) {
  const [events, setEvents] = useState(initialState);

  const addEvent = (event: AddEventParams) => {
    setEvents((prevState) => ({
      ...prevState,
      events: [
        {
          ...event,
          participants: [],
          id: prevState.event_nextId.toString(),
        },
        ...prevState.events,
      ],
      event_nextId: (prevState.event_nextId += 1),
    }));
  };

  const removeEvent = (id: string) =>
    setEvents((prevState) => ({
      ...prevState,
      events: prevState.events.filter((item) => item.id !== id),
    }));

  const addParticipant = (eventId: string, participant: AddParticipantParams) =>
    setEvents((prevState) => ({
      ...prevState,
      events: prevState.events.map((item) => {
        if (item.id === eventId) {
          return {
            ...item,
            participants: [
              {
                id: prevState.participant_nextId.toString(),
                name: participant.name,
              },
              ...item.participants,
            ],
          };
        }
        return item;
      }),
      participant_nextId: (prevState.participant_nextId += 1),
    }));

  const removeParticipant = (eventId: string, id: string) =>
    setEvents((prevState) => ({
      ...prevState,
      events: prevState.events.map((item) => {
        if (item.id === eventId) {
          return {
            ...item,
            participants: item.participants.filter(
              (participant) => participant.id !== id
            ),
          };
        }
        return item;
      }),
    }));

  return (
    <EventsContext.Provider
      value={{
        ...events,
        addEvent,
        removeEvent,
        addParticipant,
        removeParticipant,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
