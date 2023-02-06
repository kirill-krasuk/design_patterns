import { ThirdMode } from './classes/states/ThirdMode';
import { LightMode } from './classes/states/LightMode';
import { DarkMode } from './classes/states/DarkMode';
import { AppTheme } from './classes/AppTheme';

const state = new DarkMode();

/**
 * зациклили переключения состояния
 * получился такой вот тогглер
 */
state
	.setNextState(new LightMode())
	.setNextState(new ThirdMode())

	/**
	 * если убрать из уравнения переключение
	 * обратно в темный мод, то цепочка состояний
	 * будет конечна. обязательно нужно обработать этот
	 * момент
	 */
	.setNextState(state);

const appTheme = new AppTheme(state);

appTheme.changeMode();

/**
 * эмуляция постоянных нажатий на кнопку
 */
for (let i = 1; i < 6; i++) {
	appTheme.changeMode();
}

setTimeout(() => {
	appTheme.changeMode();
}, 1000);
