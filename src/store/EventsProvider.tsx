import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getStorageData, storeData } from "../services/storage";
import { AppError } from "../utils/errors";

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
  const [state, setState] = useState(initialState);

  const addEvent = (event: AddEventParams) => {
    setState((prevState) => {
      const event_nextId = (prevState.event_nextId += 1);
      const events = [
        {
          ...event,
          participants: [],
          id: prevState.event_nextId.toString(),
        },
        ...prevState.events,
      ];

      return {
        ...prevState,
        events,
        event_nextId,
      };
    });
  };

  const removeEvent = (id: string) =>
    setState((prevState) => {
      const events = prevState.events.filter((item) => item.id !== id);

      return {
        ...prevState,
        events,
      };
    });

  const addParticipant = (eventId: string, participant: AddParticipantParams) =>
    setState((prevState) => {
      const events = prevState.events.map((item) => {
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
      });

      const participant_nextId = (prevState.participant_nextId += 1);

      return {
        ...prevState,
        events,
        participant_nextId,
      };
    });

  const removeParticipant = (eventId: string, id: string) =>
    setState((prevState) => {
      const events = prevState.events.map((item) => {
        if (item.id === eventId) {
          return {
            ...item,
            participants: item.participants.filter(
              (participant) => participant.id !== id
            ),
          };
        }
        return item;
      });

      return {
        ...prevState,
        events,
      };
    });

  const getData = async () => {
    try {
      const storageData = await getStorageData();

      if (storageData) {
        setState((prevState) => ({
          ...prevState,
          ...storageData,
        }));
      }
    } catch (e) {
      AppError(e);
    }
  };

  const saveData = async () => {
    try {
      await storeData(
        state.events,
        state.event_nextId,
        state.participant_nextId
      );
    } catch (e) {
      AppError(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    saveData();
  }, [state.events]);

  return (
    <EventsContext.Provider
      value={{
        ...state,
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
