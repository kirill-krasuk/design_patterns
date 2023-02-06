import { WebpackPlugin } from './base/WebpackPlugin';

export class DeadCodeWebpackPlugin extends WebpackPlugin {
	private notUsedFiles: string[] = ['sum.ts'];
	private removedContent: string[] = [];

	preprocessInput(input: Record<string, string>): Record<string, string> {
		return Object.keys(input).reduce((acc, key) => {
			if (!this.notUsedFiles.includes(key)) {
				acc[key] = input[key];
			} else {
				this.removedContent.push(input[key]);
			}

			return acc;
		}, {} as Record<string, string>);
	}
	processOutput(output: Record<string, string>): Record<string, string> {
		return {
			...output,
			'index.ts': output['index.ts'] + this.removedContent.join(''),
		};
	}
}
