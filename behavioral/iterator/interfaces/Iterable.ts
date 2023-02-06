export interface Iterable<T> {
	// можно реализовать еще методы prev(), current().. для обратной итерации
	next(): IteratorResult<T>;
}
