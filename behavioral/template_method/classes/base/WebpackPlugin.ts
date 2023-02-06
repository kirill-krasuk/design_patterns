const DEFAULT_ROOT_SRC = 'src';

const files = {
	'sum.ts': 'export const sum = (a: number, b: number) => a + b;',
	'index.ts': 'export const a = 1;',
	'index.html': `
		<!DOCTYPE html>
		<html lang="en">
			
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
		</head>
			
		<body>
			<div id="root"></div>
		</body>
			
		</html>
	`,
};

export abstract class WebpackPlugin {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	private projectDFS(_src: string): void {
		// make project graph dependencies
	}

	private createAST(src: string): Record<string, string> {
		this.projectDFS(src);
		// build ast tree

		console.log('AST tree: ', files);

		return files;
	}

	getSourceDir(): string {
		return DEFAULT_ROOT_SRC;
	}

	abstract preprocessInput(input: Record<string, string>): Record<string, string>;
	abstract processOutput(output: Record<string, string>): Record<string, string>;

	run() {
		const src = this.getSourceDir();
		const input = this.createAST(src);

		const out = this.preprocessInput(input);
		return this.processOutput(out);
	}
}
