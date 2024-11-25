import {GameObject} from "./game-object.ts";
import {T_Params} from "./types.ts";

export class Animate extends GameObject {
    speed: number = 1000
    maxFrame: number = 2
    lastTimestamp: number = 0
    animate: boolean = true

    constructor(params: T_Params, maxFrame: number = 2, animate: boolean = true) {
        super(params);
        this.maxFrame = maxFrame;
        this.animate = animate;
    }

    update(timestamp: number): void {
        if (this.animate && timestamp - this.lastTimestamp > this.speed) {
            this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0
            this.lastTimestamp = timestamp;
        }
    }
}