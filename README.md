Дворников Матвей Дмитриевич, ЭФБО-07-24, Вариант 8

Билд проекта:
```
git clone https://github.com/matv3ykaa/mini_quiz_app
cd mini-quiz
npm install
npm start
```

Основные функции приложения заключаются в возможности выбора варианта ответа, возможности просмотра результатов опроса и возможности пройти опрос заново.
Приложение состоит из 2 основных частей: экраны с вопросами и экран с результатами опроса.
При клике на вариант ответа срабатывает функция handleClick, а вопросы хранятся в массиве объектов, где каждый объект содержит текст вопроса и массив вариантов ответа.
Если опрос завершён (done === true), показывается экран с результатами, иначе просто экран с текущим вопросом.

Структура состояния:
* current — номер текущего вопроса
* answers — массив с ответами пользователя
* done — флаг завершения опроса

Вывод: на этой контрольной работе я разработал React-приложение с мини-опросом, который состоит из простых популярных вопросов. В ходе работы я закрепил базовые навыки работы с React.

Скрины работы приложения:

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/c450dd9a-50b9-49af-bf02-8046ba84d4d5" />
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/9f1beca3-96de-43f2-86cb-c02a34b57b9e" />
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/7afd86c3-45be-43ba-bc3e-1f9c89e014f4" />
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/c623bbcf-2253-4da7-9159-3a3795aa93e0" />
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/03feb139-bbc0-46ce-89fd-e36303d3456d" />
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/43507bdb-c15a-462e-9f4d-a0c447aca397" />
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/f4e28645-fb91-4d32-9118-dc31ec547cfa" />
