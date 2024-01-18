import { atom } from "recoil";

export const iconUrl = atom<string>({
    key: 'iconUrl',
    default: "",
});