import { Gallery } from './classes/Gallery';

const gallery = new Gallery();

/**
 * в косноле можно будет увидеть сколько раз была загружена картинка
 * (так как используется паттерн легковес) картинка загрузилась 2 раза
 * но она отрисовалась 5 раз
 */
gallery.drawImage('https://picsum.photos/200/300', 0, 0, 'Image 1');
gallery.drawImage('https://picsum.photos/200/300', 10, 0, 'Image 2');
gallery.drawImage('https://picsum.photos/100/400', 20, 0, 'Image 3');
gallery.drawImage('https://picsum.photos/200/300', 30, 0, 'Image 4');
gallery.drawImage('https://picsum.photos/100/400', 40, 0, 'Image 5');
