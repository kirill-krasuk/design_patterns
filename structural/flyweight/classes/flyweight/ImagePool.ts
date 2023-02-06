import { Image } from './Image';

export class ImagePool {
	private images: Map<string, Image>;

	constructor() {
		this.images = new Map();
	}

	getImage(url: string): Image {
		if (!this.images.has(url)) {
			this.images.set(url, new Image(url));
		}

		return this.images.get(url) as Image;
	}
}
