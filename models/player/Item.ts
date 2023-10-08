import { ItemsDTO } from "../ItemsDto";

export interface Item extends ItemsDTO{
    lastAdd: string,
    quantity: number
}

export interface UserItem {
    id: string,
    lastAdd: string,
    quantity: number
}