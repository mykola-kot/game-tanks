import {ImageNameEnum, ResourceImage} from "./types.ts";

export class Resources {
    images: ResourceImage[] = [
        {
            name: ImageNameEnum.GROUND,
            src: '/public/sprites/ground.png',
            isLoaded: false,
        },
        {
            name: ImageNameEnum.HERO,
            src: '/public/sprites/tank.png',
            isLoaded: false,
        },
    ]

    constructor() {
        for (let image of this.images) {
            const img = new Image()
            img.src = image.src
            image.image = img
            img.onload = () => {
                image.isLoaded = true
            }
        }
    }

    get hero(): HTMLImageElement | null {
        return this.findImage(ImageNameEnum.HERO)
    }

    findImage(name: ImageNameEnum): HTMLImageElement | null {
        const image = this.images.find(i => i.name === name)

        if (image && image.image) return image.image

        return null
    }
}