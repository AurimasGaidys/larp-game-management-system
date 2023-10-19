import { atom } from "recoil";
import { User } from "../models/player/user";

export const globalUserState = atom<User | undefined>({
    key: 'globalUserState',
    default: undefined,
});