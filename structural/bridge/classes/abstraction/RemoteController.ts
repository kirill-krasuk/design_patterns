import type { Device } from '../../interfaces/Device';

export class RemoteController {
	constructor(protected device: Device) {}

	togglePower() {
		if (this.device.isTurnedOn()) {
			this.device.turnOff();
		} else {
			this.device.turnOn();
		}
	}

	nextChannel() {
		this.device.setChannel(this.device.getChannel() + 1);
	}

	prevChannel() {
		this.device.setChannel(this.device.getChannel() - 1);
	}

	setChannel(value: number) {
		this.device.setChannel(value);
	}

	setVolume(value: number) {
		this.device.setVolume(value);
	}

	volumeUp() {
		this.device.setVolume(this.device.getVolume() + 1);
	}

	volumeDown() {
		this.device.setVolume(this.device.getVolume() - 1);
	}
}
