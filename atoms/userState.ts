import { atom } from "recoil";
import { User } from "../models/player/user";

export const globalUserState = atom<User | undefined | null>({
    key: 'globalUserState',
    default: undefined,
});