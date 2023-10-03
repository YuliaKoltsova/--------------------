// удаление продукта
import { products } from "./modal.js";
import { saveToLocalStorage } from "./save-to-local-storage.js";

const newProductContainer = document.querySelector('.products-add__container'); // место в разметке куда добавляем новые продукты

const deleteProduct = (evt) => {
  if(evt.target.classList.contains('product__button--delete') || evt.target.classList.contains('product__button-icon')) { // если кликнули на кнопку "удалить", либо на иконку внутри нее, то:
    const currentProduct = evt.target.closest('.product-add'); // находим родительский элемент (продукт)
    currentProduct.remove(); // удаляем продукт со страницы

    //удаляем продукт из массива в localStorage
    const id = currentProduct.id; // определяем id продукта
    const product = products.find(product => product.id == id);// находим в массиве продукт по id
    products.splice(product, 1); //удаляем задачу из массива с задачами

    saveToLocalStorage(); //сохраняем изменения в localStorage
  }
}

newProductContainer.addEventListener('click', deleteProduct);