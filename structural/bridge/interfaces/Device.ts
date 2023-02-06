export interface Device {
	isTurnedOn(): boolean;
	turnOn(): void;
	turnOff(): void;
	setVolume(value: number): void;
	getVolume(): number;
	getChannel(): number;
	setChannel(value: number): void;
}
