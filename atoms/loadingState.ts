import { atom } from "recoil";

export const globalLoadingState = atom({
    key: 'globalLoadingState',
    default: false,
  });