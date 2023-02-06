import type { Device } from '../../interfaces/Device';

const MAX_VOLUME = 100;
const MIN_VOLUME = 0;

export class Radio implements Device {
	private _isTurnedOn = false;
	private volume = 0;
	private channel = 1;

	isTurnedOn(): boolean {
		return this._isTurnedOn;
	}

	turnOn(): void {
		this._isTurnedOn = true;
	}

	turnOff(): void {
		this._isTurnedOn = false;
	}

	setVolume(value: number): void {
		if (value >= MIN_VOLUME && value <= MAX_VOLUME) {
			this.volume = value;
		}
	}

	getVolume(): number {
		return this.volume;
	}

	getChannel(): number {
		return this.channel;
	}

	setChannel(value: number): void {
		if (this._isTurnedOn) {
			console.log('Change to ', value, 'FM');
			this.channel = value;
		}
	}
}
