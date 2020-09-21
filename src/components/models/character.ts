import { IMove } from "./move";

export interface ICharacter {
    Name: string
    Id: number,
    Moves: IMove[] | null
}