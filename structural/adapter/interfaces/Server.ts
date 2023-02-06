interface Server {
	create(options: any): void;

	serveStatic(pathToStatic: string): void;

	listen(port: number): Promise<void>;
}

export { Server };
