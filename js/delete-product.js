// удаление продукта
import { products } from './modal.js';
import { dayProducts } from './add-product.js';
import { saveToLocalStorage } from './save-to-local-storage.js';
import { renderIndicators, renderChart } from './render-chart.js';

const newProductContainer = document.querySelector('.products-add__container'); // место в разметке куда добавляем новые продукты
const dayProductsContainer = document.querySelector('.day__products'); // место в разметке, куда добавляем продукты за день


const deleteElement = (currentElement, array) => {
    //удаляем продукт из массива в localStorage
    const id = currentElement.id; // определяем id продукта
    const product = array.find(product => product.id == id);// находим в массиве продукт по id
    array.splice(product, 1); //удаляем задачу из массива с задачами
}

// функция удвления продукта из раздела "добавить продукт"
const deleteProduct = (evt) => {
  if(evt.target.classList.contains('product__button--delete') || evt.target.classList.contains('product__button-icon')) { // если кликнули на кнопку "удалить", либо на иконку внутри нее, то:
    const currentProduct = evt.target.closest('.product-add'); // находим родительский элемент (продукт)
    currentProduct.remove(); // удаляем продукт со страницы
    deleteElement (currentProduct, products); //удаляем продукт из массива в localStorage
    saveToLocalStorage('products', products); //сохраняем изменения в localStorage
  }
}

// функция удвления продукта из раздела "За сегодня"
const deleteDayProduct = (evt) => {
  if(evt.target.classList.contains('product__button') || evt.target.classList.contains('product__button-icon')) { // если кликнули на кнопку "удалить", либо на иконку внутри нее, то:
    const currentProduct = evt.target.closest('.product'); // находим родительский элемент (продукт)
    currentProduct.remove(); // удаляем продукт со страницы
    deleteElement (currentProduct, dayProducts); //удаляем продукт из массива в localStorage
    saveToLocalStorage('dayProducts', dayProducts); //сохраняем изменения в localStorage
    renderIndicators(dayProducts);
    renderChart();
  }
}

newProductContainer.addEventListener('click', deleteProduct);
dayProductsContainer.addEventListener('click', deleteDayProduct);