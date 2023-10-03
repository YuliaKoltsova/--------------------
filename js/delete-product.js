// удаление продукта
import { products } from "./modal.js";
import { saveToLocalStorage } from "./save-to-local-storage.js";

const deleteProductButton = document.querySelectorAll('.product__button--delete'); // кнопки "удалить" у всех продуктов в списке

deleteProductButton.forEach(deleteButton => {
  deleteButton.addEventListener('click', (evt) => {
    const currentProduct = evt.target.closest('.product-add'); // находим родительский элемент (продукт)
    currentProduct.remove(); // удаляем продукт со страницы

    //удаляем продукт из массива в localStorage
    const id = currentProduct.id; // определяем id продукта
    const product = products.find(product => product.id == id);// находим в массиве продукт по id
    products.splice(product, 1); //удаляем задачу из массива с задачами

    saveToLocalStorage(); //сохраняем изменения в localStorage
  })
})