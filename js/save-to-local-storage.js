// Сохранение в localStorage
import { products } from "./modal.js";

const saveToLocalStorage = () => {
  localStorage.setItem("products", JSON.stringify(products)); //преобразование массива в json строку и сохранение его в localStorage по ключу tasks
}

export {saveToLocalStorage};