export const LEFT: string = 'LEFT'
export const RIGHT: string = 'RIGHT'
export const UP: string = 'UP'
export const DOWN: string = 'DOWN'

const eventCodes = {
    UP: ['ArrowUp', 'KeyW'],
    DOWN: ['ArrowDown', 'KeyS'],
    LEFT: ['ArrowLeft', 'KeyA'],
    RIGHT: ['ArrowRight', 'KeyD'],
}

export class Input {
    keys: string[] = []

    constructor() {
        window.addEventListener('keydown', (e): void => {
            if (eventCodes.UP.includes(e.code)) {
                this.keyPressed(UP)
            } else if (eventCodes.DOWN.includes(e.code)) {
                this.keyPressed(DOWN)
            } else if (eventCodes.LEFT.includes(e.code)) {
                this.keyPressed(LEFT)
            } else if (eventCodes.RIGHT.includes(e.code)) {
                this.keyPressed(RIGHT)
            }
        })
        window.addEventListener('keyup', (e): void => {
            if (eventCodes.UP.includes(e.code)) {
                this.keyReleased(UP)
            } else if (eventCodes.DOWN.includes(e.code)) {
                this.keyReleased(DOWN)
            } else if (eventCodes.LEFT.includes(e.code)) {
                this.keyReleased(LEFT)
            } else if (eventCodes.RIGHT.includes(e.code)) {
                this.keyReleased(RIGHT)
            }
        })
    }

    keyPressed(key: string) {
        if (this.keys.indexOf(key) === -1) {
            this.keys.unshift(key)
        }
    }

    keyReleased(key: string) {
        const index: number = this.keys.indexOf(key);
        if (index === -1) return;
        this.keys.splice(index, 1);
    }

    get lastKey() {
        return this.keys[0];
    }
}