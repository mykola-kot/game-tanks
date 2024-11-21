import {World} from "./components/world.ts";
import {Hero} from "./components/hero.ts";
import {Input} from "./components/input.ts";
import {Resources} from "./components/resources.ts";

export class Game {
    world: World
    hero: Hero
    input: Input
    eventUpdate: boolean = false
    eventTimer: number = 0
    eventInterval: number = 50
    isDebug: boolean = false

    constructor() {
        const resources = new Resources()
        this.world = new World()
        this.hero = new Hero({
            game: this,
            sprite: {
                x: 1,
                y: 1,
                width: 32,
                height: 32,
                image: resources.hero as HTMLImageElement,
            },
            position: {
                x: 0,
                y: 0,
            },
            scale: 1
        })
        this.input = new Input()
    }

    render(ctx: CanvasRenderingContext2D, deltaTime: number): void {
        this.hero.update(deltaTime)

        if (this.isDebug) this.world.drawGrid(ctx)

        this.hero.draw(ctx)

        if (this.eventTimer < this.eventInterval) {
            this.eventTimer += deltaTime
            this.eventUpdate = false
        } else {
            this.eventTimer = 0
            this.eventUpdate = true
        }
    }
}