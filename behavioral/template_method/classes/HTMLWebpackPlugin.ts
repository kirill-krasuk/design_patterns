import { WebpackPlugin } from './base/WebpackPlugin';

export class HTMLWebpackPlugin extends WebpackPlugin {
	constructor(private entryFile: string) {
		super();
	}

	preprocessInput(input: Record<string, string>): Record<string, string> {
		return input;
	}
	processOutput(output: Record<string, string>): Record<string, string> {
		return {
			...output,
			[this.entryFile]: output[this.entryFile]
				.replace(
					'</body>',
					`<script src="index.js">${output['index.ts']}</script></body>`,
				)
				.replaceAll('\t', ''),
		};
	}
}
