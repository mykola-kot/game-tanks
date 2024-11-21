import {COLS, GAME_HEIGHT, GAME_WIDTH, ROWS, TILE_SIZE} from "../main.ts";

export class World {
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