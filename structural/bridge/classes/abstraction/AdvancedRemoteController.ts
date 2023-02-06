import { RemoteController } from './RemoteController';

export class AdvancedRemoteController extends RemoteController {
	mute() {
		this.device.setVolume(0);
	}
}
