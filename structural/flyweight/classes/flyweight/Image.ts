export class Image {
	private base64View: string;

	constructor(url: string) {
		this.base64View = this.loadImage(url);
	}

	private loadImage(url: string): string {
		console.log('!!LOADING!! image from url: ', url, '\n');
		return `base64:${url}`;
	}

	draw(x: number, y: number, caption: string) {
		console.log(
			`Drawing image (${this.base64View}) at ${x}, ${y} with caption ${caption}\n`,
		);
	}
}
