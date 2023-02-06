import type { Device } from '../../interfaces/Device';

const MAX_CHANNEL = 99;
const MIN_CHANNEL = 1;
const MAX_VOLUME = 100;
const MIN_VOLUME = 0;

export class TV implements Device {
	private _isTurnedOn = false;
	private volume = 0;
	private channel = MIN_CHANNEL;

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
		/**
		 * на ТВ можно менять звук только если он
		 * включен, у радио наоборот
		 */
		if (!this._isTurnedOn) {
			return;
		}

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
		if (!this._isTurnedOn) {
			return;
		}

		if (value >= MIN_CHANNEL && value <= MAX_CHANNEL) {
			console.log('Change to ', value, 'channel');
			this.channel = value;
		} else if (value < MIN_CHANNEL && value === this.channel - 1) {
			this.channel = MAX_CHANNEL;
		} else if (value > MAX_CHANNEL && value === this.channel + 1) {
			this.channel = MIN_CHANNEL;
		} else {
			console.log('Out of boundary channels ');
		}
	}
}
