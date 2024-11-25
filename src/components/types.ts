import {Game} from "../game.ts";

export enum ImageNameEnum {
    HERO = 'hero',
    GROUND = 'ground'
}

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

export type T_LevelMap = {
    col: number | number[],
    row: number | number[],
    sprite: ImageNameEnum,
    animal: boolean,
    spriteX: number,
    spriteY: number,
    animate: boolean,
    maxFrame: number,
}