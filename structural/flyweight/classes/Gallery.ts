import { ImagePool } from './flyweight/ImagePool';

export class Gallery {
	private imagePool = new ImagePool();

	drawImage(url: string, x: number, y: number, caption: string) {
		const image = this.imagePool.getImage(url);
		image.draw(x, y, caption);
	}
}
