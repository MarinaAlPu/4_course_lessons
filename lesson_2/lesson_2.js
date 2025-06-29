/*
Создайте объект на JavaScript, который описывает видеоролик на платформе для блогеров. Включите в объект следующие свойства:
Заголовок видео.
Описание видео.
URL видео.
Длительность видео в секундах.
Количество просмотров.
Количество лайков.
Признак того, является ли видео прямым эфиром.
Информация об авторе видео в виде вложенного объекта. Добавьте имя автора, URL канала автора и количество подписчиков.
Список тегов для видео в виде массива.
Список комментариев в виде массива объектов. Каждый комментарий должен содержать имя пользователя, текст комментария и количество лайков.
Типы значений для свойств определите самостоятельно.*/


const video_1 = {
  title: "Название",
  description: "Описание",
  url: "videos/video_1.mpeg4",
  duration: 600000,// ms
  viewsQuantity: 1234,
  likesCounter: 456,
  isOnline: true,
  author: {
    name: "Имя Автора",
    channelUrl: "https://my-favorite-channal",
    subscribersQuantityCounter: 12345
  },
  tags: ["video", "online", "intresting"],
  comments: [
    {
      userName: "Имя 1",
      commentText: "Комментарий 1",
      likesCounter: 3
    },
    {
      userName: "Имя 2",
      commentText: "Комментарий 2",
      likesCounter: 12
    },
  ]
};


/* Дан массив:
const array = ["Петр", "Василий", "Владислав", 100, true, "1000", "Владимир"]
Создайте новый массив только с именами, которые начинаются на букву В.
Добавьте к каждому элементу массива фамилию Иванов.
Выведите в консоль каждый элемент получившегося массива.
В исходном массиве найдите первый элемент, который не является строкой, и выведите в консоль.*/

const array = ["Петр", "Василий", "Владислав", 100, true, "1000", "Владимир"];

const newArrB = array.filter((item) => {
 return String(item).startsWith("В")
});

console.log(newArrB);


const newArrIvanov = array.map((item) => {
  return String(item) + " Иванов";
})

console.log(newArrIvanov);


array.forEach((item) => {
  console.log(item);
})


for (const item of array) {
  console.log(item);
}


const isNotString = array.find((item) => {
  return typeof(item) !== "string";
})

console.log(isNotString);



const product = {
    img: "http://images/vilora.jpeg",
    title: "Кресло VILORA",
    description: "Мягкое и уютное, аккуратное и стильное.",
    price: 21000,
}

const resultKeys = Object.keys(product);
console.log(resultKeys);

const resultValues = Object.values(product);
console.log(resultValues);

const resultEntries = Object.entries(product);
console.log(resultEntries);






