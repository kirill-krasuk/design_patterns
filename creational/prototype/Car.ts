/**
 * простой пример класса, который сложный по конструктору
 *
 * и мы можем реализовать копирование текущего объекта в новый
 * дабы мы могли работать с копией и не изменять оригинал
 */
export class Car {
	constructor(private model: string, private type: string, private price: number) {}

	setModel(newModel: string) {
		this.model = newModel;
	}

	/**
	 * Этот метод реализует паттерн Prototype
	 */
	clone(): Car {
		return new Car(this.model, this.type, this.price);
	}
}
