import { Card } from "./card";


export interface Player
{
    name: string,
    hand: Card[],
    stable: Card[]
}