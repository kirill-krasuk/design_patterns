import { State } from '../../interfaces/State';

export class LightMode extends State {
	override changeMode(): void {
		console.log('Change to light mode');
	}
}
