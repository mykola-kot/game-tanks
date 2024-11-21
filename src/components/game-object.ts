import {TILE_SIZE} from "../main.ts";
import {T_Params, T_Position, T_Sprite} from "./types.ts";
import {Game} from "../game.ts";

export class GameObject {
    game: Game
    sprite: T_Sprite
    position: T_Position
    scale: number = 1
    width: number = 0
    height: number = 0
    destinationPosition: T_Position
    destinationToTravel: T_Position

    constructor(params: T_Params) {
        this.game = params.game;
        this.sprite = params.sprite;
        this.position = params.position;
        this.scale = params.scale;
        this.destinationPosition = {x: this.position.x, y: this.position.y}
        this.destinationToTravel = {x: 0, y: 0}
        this.width = this.sprite.width * this.scale
        this.height = this.sprite.height * this.scale
    }

    moveTowards(destinationPosition: T_Position, speed: number) {
        this.destinationToTravel.x = destinationPosition.x - this.position.x
        this.destinationToTravel.y = destinationPosition.y - this.position.y

        let distance: number = Math.hypot(this.destinationToTravel.x, this.destinationToTravel.y)

        if (distance <= speed) {
            this.position.x = destinationPosition.x
            this.position.y = destinationPosition.y
        } else {
            const stepX = this.destinationToTravel.x / distance
            const stepY = this.destinationToTravel.y / distance

            this.position.x += stepX * speed
            this.position.y += stepY * speed

            this.destinationToTravel.x = destinationPosition.x - this.position.x
            this.destinationToTravel.y = destinationPosition.y - this.position.y

            distance = Math.hypot(this.destinationToTravel.x, this.destinationToTravel.y)
        }

        return distance
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.game.isDebug) {
            ctx.fillStyle = 'blue'
            ctx.fillRect(
                this.position.x,
                this.position.y,
                TILE_SIZE,
                TILE_SIZE,
            )
            ctx.strokeStyle = 'yellow'
            ctx.strokeRect(
                this.destinationPosition.x,
                this.destinationPosition.y,
                TILE_SIZE,
                TILE_SIZE,
            )
        }

        if (this.sprite.image) {
            ctx.drawImage(
                this.sprite.image,
                this.sprite.x * this.sprite.width,
                this.sprite.y * this.sprite.height,
                this.sprite.width,
                this.sprite.height,
                this.position.x + TILE_SIZE / 2 - this.width / 2,
                this.position.y + TILE_SIZE - this.height,
                this.width,
                this.height,
            )
        }
    }
}