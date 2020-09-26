import { IMove } from "./move";

export interface ICharacter {
    Name: string
    Id: number,
    GameplayDetails: string,
    Lore: string,
    Moves: IMove[] | null
}