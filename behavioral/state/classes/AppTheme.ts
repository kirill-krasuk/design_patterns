import type { Context } from '../interfaces/Context';
import type { State } from '../interfaces/State';

/**
 * Context - класс в котором работает бизнес логика
 * и в котором хранится текущее состояние (переключается)
 */
export class AppTheme implements Context {
	constructor(private state?: State) {}

	changeMode(): void {
		if (this.state) {
			this.state.changeMode();

			/**
			 * можно хендлить стейт внутри стейт классов,
			 * в этом примере можно было и внутри контекста,
			 * так как стейты мы глобально поместили в цепочку
			 * чем уменьшили связанность между стейт классами.
			 *
			 * но можно организовать связи таким способом,
			 * что конкретные классы стейтов переключают состояние
			 * контекста на другой конкретный стейт
			 */
			this.state = this.state.nextState();
		} else {
			console.log('Final! No more state steps');
		}
	}

	changeState(state: State): void {
		this.state = state;
	}
}
