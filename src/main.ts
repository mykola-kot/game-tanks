import './style.css'
import {Game} from "./game.ts";

export const TILE_SIZE: number = 32;
export const COLS: number = 15;
export const ROWS: number = 20;
export const GAME_WIDTH: number = TILE_SIZE * COLS;
export const GAME_HEIGHT: number = TILE_SIZE * ROWS;


window.addEventListener('load', (): void => {
    const canvas: HTMLCanvasElement | null = document.getElementById('game') as HTMLCanvasElement
    if (!canvas) {
        console.error('not found canvas element')
        return
    }

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
    if (!ctx) {
        console.error('ctx canvas')
        return
    }

    canvas.width = GAME_WIDTH
    canvas.height = GAME_HEIGHT
    const game = new Game()

    let lastTime = 0

    function animate(timeStamp: number): void {
        requestAnimationFrame(animate);
        if (ctx) {
            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
            const deltaTime = timeStamp - lastTime
            lastTime = timeStamp
            game.render(ctx, deltaTime, timeStamp)
        }
    }

    requestAnimationFrame(animate)
});