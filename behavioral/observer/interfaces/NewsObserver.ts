import type { NewsCenter } from '../classes/subject/NewsCenter';

export interface NewsObserver {
	/**
	 * или же можно передать какое-то
	 * конкретное состояния внутри субъекта
	 */
	// update<T>(data: T): void;

	update(subject: NewsCenter): void;
}
