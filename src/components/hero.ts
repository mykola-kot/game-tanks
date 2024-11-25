import {GameObject} from "./game-object.ts";
import {DOWN, LEFT, RIGHT, UP} from "./input.ts";
import {TILE_SIZE} from "../main.ts";

export class Hero extends GameObject {
    speed: number = 100
    maxFrame: number = 1
    moving: boolean = false

    update(deltaTime: number): void {
        let nextX: number = this.destinationPosition.x
        let nextY: number = this.destinationPosition.y
        const scaledSpeed: number = this.speed * (deltaTime / 1000)
        const distance: number = this.moveTowards(this.destinationPosition, scaledSpeed)
        const arrived: boolean = distance <= scaledSpeed

        if (arrived) {
            if (this.game.input.lastKey === UP) {
                nextY -= TILE_SIZE
                this.sprite.y = 0
            } else if (this.game.input.lastKey === DOWN) {
                nextY += TILE_SIZE
                this.sprite.y = 1
            } else if (this.game.input.lastKey === LEFT) {
                nextX -= TILE_SIZE
                this.sprite.y = 2
            } else if (this.game.input.lastKey === RIGHT) {
                nextX += TILE_SIZE
                this.sprite.y = 3
            }

            if (this.game.world.isSpaceFree(nextX, nextY)) {
                this.destinationPosition.x = nextX
                this.destinationPosition.y = nextY
            }
        }

        this.moving = this.game.input.keys.length > 0 || !arrived

        if (this.game.eventUpdate && this.moving) {
            this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0
        }
    }
}