# Singleton

___

## 🤔 Применимость

- Когда в программе должен быть единственный экземпляр какого-то класса, доступный
всем клиентам (например, общий доступ к базе данных из разных частей программы).
  - **Одиночка** скрывает от клиентов все способы создания нового объекта, кроме
специального метода. Этот метод либо создаёт объект, либо отдаёт существующий объект,
если он уже был создан.
- Когда вам хочется иметь больше контроля над глобальными переменными.
  - В отличие от глобальных переменных, **Одиночка** гарантирует, что никакой другой
код не заменит созданный экземпляр класса, поэтому вы всегда уверены в наличии лишь
одного объекта-одиночки. Тем не менее, в любой момент вы можете расширить это ограничение
и позволить любое количество объектов-одиночек, поменяв код в одном месте
(метод getInstance).

### 🎯 Признаки применимости

**Одиночку** можно определить по статическому создающему методу `getInstance`,
который возвращает один и тот же объект. Многие программисты считаю **Одиночку**
антипаттерном, поэтому его всё реже и реже можно встретить в TypeScript-коде.

## Преимущества и недостатки

### ✅ Преимущества

- Гарантирует наличие единственного экземпляра класса.
- Предоставляет к нему глобальную точку доступа.
- Реализует отложенную инициализацию объекта-одиночки.

### ❌ Недостатки

- Нарушает принцип единственной ответственности класса.
- Маскирует плохой дизайн.
- Требует постоянного создания Mock-объектов при юнит-тестировании.

## 🔁 Отношения с другими паттернами

- **Фасад** можно сделать **Одиночкой**, так как обычно нужен только один объект-фасад.
- Паттерн **Легковес** может напоминать **Одиночку**, если для конкретной задачи
у вас получилось свести количество объектов к одному. Но помните, что между
паттернами есть два кардинальных отличия:
  - В отличие от **Одиночки**, вы можете иметь множество объектов-легковесов
  - Объекты-легковесы должны быть неизменяемыми, тогда как объект-**Одиночка**
допускает изменение своего состояния.
- **Абстрактная фабрика**, **Строитель** и **Прототип** могут быть реализованы
при помощи Одиночки.

## 📝 Заметки

Singleton плох тем, что он нарушает принцип единственной ответственности класса.
Поэтому его всё реже и реже можно встретить в TypeScript-коде. Но иногда он
применяется для реализации глобальных объектов, которые должны быть доступны
в любой части приложения. Например, для реализации http client или для доступа к
конфигурации приложения.

Так же Singleton может быть полезен для реализации отложенной инициализации.
Например, если вы хотите, чтобы ваша библиотека не инициализировалась до тех
пор, пока не будет вызвана какая-то функция. В этом случае вы можете сделать
класс-одиночку, который будет инициализировать библиотеку при первом вызове
какой-то функции.

Singleton антипаттерн в случаях когда он используется для маскировки плохого
дизайна. Например, если вы используете Singleton для того, чтобы иметь доступ к
какому-то глобальному объекту, то это скорее всего означает, что вы не
используете Dependency Injection. В этом случае лучше использовать DI.
