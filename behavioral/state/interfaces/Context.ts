import { State } from './State';

export interface Context {
	/**
	 * можно использовать конструктор
	 * или отдельный метод для инициализации
	 * состояния
	 */
	// initialState(state: State): void;

	changeState(state: State): void;
	changeMode(): void;
}
