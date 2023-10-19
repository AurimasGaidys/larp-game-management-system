import { atom } from "recoil";
import { EventDTO } from "../models/EventDto";

export const globalEventState = atom<EventDTO | undefined>({
    key: 'globalEventState',
    default: undefined,
  });


  export const globalEventId = atom<string>({
    key: 'globalEventId',
    default: "",
  });