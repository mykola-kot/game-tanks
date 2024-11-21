import {Game} from "../game.ts";

export type T_Sprite = {
    x: number,
    y: number,
    width: number,
    height: number,
    image: HTMLImageElement
}

export type T_Position = {
    x: number,
    y: number
}

export type T_Params = {
    game: Game,
    sprite: T_Sprite
    position: T_Position,
    scale: number
}

export type ResourceImage = {
    name: string,
    src: string,
    isLoaded: boolean,
    image?: HTMLImageElement,
}