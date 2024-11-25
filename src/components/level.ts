import {Resources} from "./resources.ts";
import {Animate} from "./animate.ts";
import {Game} from "../game.ts";
import {TILE_SIZE} from "../main.ts";
import {T_LevelMap} from "./types.ts";

export class Level {
    resources: Resources
    game: Game
    elements: Animate[] = []

    constructor(resources: Resources, game: Game, level: T_LevelMap[]) {
        this.resources = resources
        this.game = game

        for (let i of level) {
            const cols = Array.isArray(i.col) ? i.col : [i.col];
            const rows = Array.isArray(i.row) ? i.row : [i.row];

            for (let c of cols) {
                for (let r of rows) {
                    this.elements.push(
                        new Animate(
                            {
                                game: this.game,
                                sprite: {
                                    x: i.spriteX,
                                    y: i.spriteY,
                                    width: 32,
                                    height: 32,
                                    image: resources.findImage(i.sprite) as HTMLImageElement,
                                },
                                position: {
                                    x: c * TILE_SIZE,
                                    y: r * TILE_SIZE,
                                },
                                scale: 1,
                            },
                            i.maxFrame,
                            i.animate
                        )
                    );
                }
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D, timeStamp: number) {
        for (let element of this.elements) {
            element.draw(ctx)
            element.update(timeStamp)
        }
    }
}