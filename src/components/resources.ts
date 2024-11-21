import {ResourceImage} from "./types.ts";

enum ImageName {
    hero = 'hero',
}

export class Resources {
    images: ResourceImage[] = [
        {
            name: ImageName.hero,
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
        return this.findImage(ImageName.hero)
    }

    findImage(name: ImageName): HTMLImageElement | null {
        const image = this.images.find(i => i.name === name)

        if (image && image.image) return image.image

        return null
    }
}