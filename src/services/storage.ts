import AsyncStorage from "@react-native-async-storage/async-storage";
import { EventType } from "../store/EventsProvider";

enum StorageKey {
  EVENTS = "@events",
  EVENT_NEXT_ID = "@event_nextId",
  PARTICIPANT_NEXT_ID = "@participant_nextId",
}

export const storeData = async (
  events: EventType[],
  eventNextId: number,
  participantNextId: number
) => {
  try {
    await AsyncStorage.setItem(StorageKey.EVENTS, JSON.stringify(events));
    await AsyncStorage.setItem(
      StorageKey.EVENT_NEXT_ID,
      JSON.stringify(eventNextId)
    );
    await AsyncStorage.setItem(
      StorageKey.PARTICIPANT_NEXT_ID,
      JSON.stringify(participantNextId)
    );
  } catch {
    throw Error("Failed [storeData]");
  }
};

export const getStorageData = async () => {
  try {
    let storeEvents = await AsyncStorage.getItem(StorageKey.EVENTS);
    let storeEventNextId = await AsyncStorage.getItem(StorageKey.EVENT_NEXT_ID);
    let storeParticipantNextId = await AsyncStorage.getItem(
      StorageKey.PARTICIPANT_NEXT_ID
    );
    if (storeEvents && storeEventNextId && storeParticipantNextId) {
      const events: EventType[] = JSON.parse(storeEvents);
      const event_nextId: number = JSON.parse(storeEventNextId);
      const participant_nextId: number = JSON.parse(storeEventNextId);

      return {
        events,
        participant_nextId,
        event_nextId,
      };
    }
    return {
      events: [],
      participant_nextId: 1,
      event_nextId: 1,
    };
  } catch {
    throw Error("Failed [getStorageData]");
  }
};
