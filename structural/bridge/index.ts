import { AdvancedRemoteController } from './classes/abstraction/AdvancedRemoteController';
import { RemoteController } from './classes/abstraction/RemoteController';
import { Radio } from './classes/implementation/Radio';
import { TV } from './classes/implementation/TV';

const radio = new Radio();
/**
 * абстракция + реализация
 */
const remote = new RemoteController(radio);

remote.setVolume(99);
/**
 * канал не переключится пока не включить радио
 */
remote.nextChannel();

remote.togglePower();
remote.nextChannel();

console.log(radio);

console.log('===========');

const tv = new TV();
/**
 * расширенная абстракция + иная реализация
 */
const advancedRemote = new AdvancedRemoteController(tv);

advancedRemote.togglePower();
advancedRemote.setVolume(100);
advancedRemote.setChannel(99);

console.log(tv);

advancedRemote.volumeUp();
advancedRemote.nextChannel();

console.log(tv);
