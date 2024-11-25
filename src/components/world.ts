import {COLS, GAME_HEIGHT, GAME_WIDTH, ROWS, TILE_SIZE} from "../main.ts";
import {Level} from "./level.ts";
import {Game} from "../game.ts";
import {Resources} from "./resources.ts";
import {ImageNameEnum, T_LevelMap} from "./types.ts";

const level1: T_LevelMap[] = [
    {
        col: 0,
        row: 0,
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 1,
        animate: true,
        maxFrame: 2,
    },
    {
        col: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        row: 0,
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 4,
        animate: true,
        maxFrame: 2,
    },
    {
        col: 14,
        row: 0,
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 0,
        animate: true,
        maxFrame: 2,
    },
    {
        col: 14,
        row: 19,
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 3,
        animate: true,
        maxFrame: 2,
    },
    {
        col: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        row: 19,
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 5,
        animate: true,
        maxFrame: 2,
    },
    {
        col: 0,
        row: 19,
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 2,
        animate: true,
        maxFrame: 2,
    },
    {
        col: 0,
        row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 7,
        animate: true,
        maxFrame: 2,
    },
    {
        col: 14,
        row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 0,
        spriteY: 6,
        animate: true,
        maxFrame: 2,
    },
    {
        col: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        sprite: ImageNameEnum.GROUND,
        animal: true,
        spriteX: 1,
        spriteY: 8,
        animate: false,
        maxFrame: 1,
    },
]

export class World {
    level: Level

    constructor(resources: Resources, game: Game) {
        this.level = new Level(resources, game, level1)
    }

    draw(ctx: CanvasRenderingContext2D, timeStamp: number) {
        this.level.draw(ctx, timeStamp);
    }

    drawGrid(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = 'black'
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                ctx.strokeRect(
                    col * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                )
            }
        }
    }

    isSpaceFree(x: number, y: number) {
        return x >= 0 && y >= 0 && x < GAME_WIDTH && y < GAME_HEIGHT
    }
}