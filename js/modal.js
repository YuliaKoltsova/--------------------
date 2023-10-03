import { renderNewProduct } from "./render-localStorage-info.js";
import { saveToLocalStorage } from "./save-to-local-storage.js";

// модальные окна
const modalSettings = document.querySelector('.modal-settings'); // модальное окно с настройками
const modalAddProduct = document.querySelector('.modal-add-product'); // модальное окно с добавлением продукта

const modalSettingsButton = document.querySelector('.chart__button'); //кнопка настройки
const modalAddProductButton = document.querySelector('.products-add__button'); // кнопка "добавить продукт"

const modalSettingsCloseButton = document.querySelector('.modal-settings__button-close'); //кнопка закрыть на модальном окне с настройками
const modalAddProductCloseButton = document.querySelector('.modal-add-product__button-close'); // кнопка закрыть на модальном окне с добавлением продукта

const modalSettingsAddButton = document.querySelector('.modal-settings__button'); // кнопка добавить на модальном окне с настройками
const modalAddProductAddButton = document.querySelector('.modal-add-product__button'); // кнопка добавить на модальнм окне с добавлением продукта

const modalSettingsInput = document.querySelector('.modal-settings__input'); // инпут модального окна с настройками
const maxCalories =  document.querySelector('.chart__info--max-calories'); // место в разметке, куда записываем максимальное количество калорий

const addNewProductForm = document.querySelector('.modal-add-product__form'); // форма для добавления нового продукта
const addNewProductName = addNewProductForm.querySelector('.modal-add-product__input--name'); // инпут с названием продукта
const addNewProductCalories = addNewProductForm.querySelector('.modal-add-product__input--calories'); // инпут с названием продукта
const addNewProductProteins = addNewProductForm.querySelector('.modal-add-product__input--proteins'); // инпут с  количетсвом белков
const addNewProductFats = addNewProductForm.querySelector('.modal-add-product__input--fats'); // инпут с количеством жиров
const addNewProductCarbohydrates = addNewProductForm.querySelector('.modal-add-product__input--carbohydrates'); // инпут с количеством углеводов


let products = []; // массив с продуктами

// настройки
const renderMaxCalories = () => { // проверяем есть ли в localStorage информация по ключу maxCalories и если есть, то выводим ее на страницу
  if(localStorage.getItem('maxCalories')) {
    maxCalories.textContent = localStorage.getItem('maxCalories');
  }
}
renderMaxCalories();

modalSettingsButton.addEventListener('click', () => { // открытие
  modalSettings.style.display = 'flex';
})

modalSettingsCloseButton.addEventListener('click', () => { // закрытие по крестику
  modalSettings.style.display = 'none';
})

modalSettingsAddButton.addEventListener('click', () => { // закрытие по кнопке добавить
  modalSettings.style.display = 'none';
  maxCalories.textContent = modalSettingsInput.value; // добавляем значение максимального количества калорий за день из инпута на страницу
  localStorage.setItem('maxCalories', modalSettingsInput.value); // сохраняем значение максимального количества калорий в localStorage
})


// добавить новый продукт
modalAddProductButton.addEventListener('click', () => { // открытие
  modalAddProduct.style.display = 'flex';
})

modalAddProductCloseButton.addEventListener('click', () => { // закрытие по крестику
  modalAddProduct.style.display = 'none';
})

modalAddProductAddButton.addEventListener('click', (evt) => { // закрытие по кнопке добавить
  // если есть пустые инпуты, то окно не закрывается
  if (addNewProductName.value.trim() === '' || addNewProductCalories.value.trim() === '' || addNewProductProteins.value.trim() === '' || addNewProductFats.value.trim() === '' || addNewProductCarbohydrates.value.trim() === '') {
    return
  } else {
    // если все поля заполнены, то модальное окно закрывается
    modalAddProduct.style.display = 'none';
  }
})


// проверяем есть ли в localStorage информация по ключу products и если есть, то выводим продукты на страницу
if (localStorage.getItem('products')) { 
  products = JSON.parse(localStorage.getItem('products'));
}

products.forEach((product) => { // отображаем продукты из localStorage на странице
  renderNewProduct(product);
})

// функция добавления нового продукта
const addNewProduct = (evt) => {
  evt.preventDefault(); // отменяем отправку формы

  if (evt.keyCode == 13) { // отменяем отправку формы по нажатию на ecs
    evt.preventDefault(); 
  }

  // достаем значения из инпутов
  const nameProduct = addNewProductName.value;
  const caloriesProduct = addNewProductCalories.value;
  const proteinsProduct = addNewProductProteins.value;
  const fatsProduct = addNewProductFats.value;
  const carbohydratesProduct = addNewProductCarbohydrates.value;

  // объект со значениями продукта
  const newProduct = {
    name: nameProduct,
    calories: caloriesProduct,
    proteins: proteinsProduct,
    fats: fatsProduct,
    carbohydrates: carbohydratesProduct,
    id: Date.now(),
  }

  // добавляем новый продукт в массив с продуктами
  products.push(newProduct);

  // отображаем на странице новый продукт
  renderNewProduct(newProduct);

  // очищаем поля ввода
  addNewProductName.value = '';
  addNewProductCalories.value = '';
  addNewProductProteins.value = '';
  addNewProductFats.value = '';
  addNewProductCarbohydrates.value = '';

  saveToLocalStorage(); //сохранение данных в localStorage
}

addNewProductForm.addEventListener('submit', addNewProduct); 

export {products};