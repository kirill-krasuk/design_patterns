import { State } from '../../interfaces/State';

export class DarkMode extends State {
	override changeMode(): void {
		console.log('Change to dark mode');
	}
}
