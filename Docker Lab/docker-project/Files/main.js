import { clickTheam, getLink } from "./scripts/booksTheam.js";
import { sendFetch } from "./scripts/loader.js";
import { findClick, uploadBin } from "./scripts/localStorage.js";

const bookContainer = document.querySelector(".books__container") // Контейнер, куда размещаются книги

findClick()
uploadBin()
sendFetch(getLink()) // Отправляем запрос по подготовленной ссылке 
clickTheam() // Вешаем обработчики на кнопки
const btn = document.querySelector(".newloader__btn")
btn.addEventListener("click", () => { // Отслеживаем нажатие кнопки: Больше книг
    bookContainer.setAttribute("data-count", `${+bookContainer.getAttribute("data-count") + 6}`) // добавляем контейнеру data атрибут, чтоб потом понимать, сколько в нём книг
    sendFetch(getLink())
})
