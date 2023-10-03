// добавление продукта из списка продуктов раздел "за сегодня"
import { saveToLocalStorage } from './save-to-local-storage.js'; // функция для сохранения информации в localStorage
import { renderDayProduct } from './render-local-storage-info.js'; 
import { renderIndicators, renderChart } from './render-chart.js';

const newProductContainer = document.querySelector('.products-add__container'); // место в разметке куда добавляем новые продукты

let dayProducts = [];

const addProduct = (evt) => {
  if(evt.target.classList.contains('product-add--add')) { // если кликнули на кнопку + в карточке продукта, то:
    const currentProduct = evt.target.closest('.product-add');// находим родителя кнопки(саму карточку товара)

    // забираем значения из карточки товара в переменные 
    const productName = currentProduct.querySelector('.product-add__name').textContent;
    const productCalories = Number(currentProduct.querySelector('.product-add__calories').textContent);
    const productProteins = Number(currentProduct.querySelector('.product-add__proteins').textContent);
    const productFats = Number(currentProduct.querySelector('.product-add__fats').textContent);
    const productCarbohydrates = Number(currentProduct.querySelector('.product-add__carbohydrates').textContent);
    const productWeight = Number(currentProduct.querySelector('.product-add__input').value);

    // расчет в зависимости от веса
    const productCaloriesWithWeight = (productCalories * productWeight) / 100;
    const productProteinsWithWeight = (productProteins * productWeight) / 100;
    const productFatsWithWeight = (productFats * productWeight) / 100;
    const productCarbohydratesWithWeight = (productCarbohydrates * productWeight) / 100;

    // создаем объект с продуктом для раздела "за сегодня"
    const dayProduct = {
      name: productName,
      calories: productCaloriesWithWeight,
      proteins: productProteinsWithWeight,
      fats: productFatsWithWeight,
      carbohydrates: productCarbohydratesWithWeight,
      weight: productWeight,
      id: Date.now(),
    }

    dayProducts.push(dayProduct); // добавляем продукт в массив продуктов раздела "за сегодня"

    renderDayProduct(dayProduct); // добавляем продукт на страницу

    saveToLocalStorage('dayProducts', dayProducts); // сохраняем данные в localStorage

    renderIndicators(dayProducts); // пересчитываем итоговые показатели калорийности и тд
    renderChart();
  }
}

newProductContainer.addEventListener('click', addProduct);

// проверяем есть ли в localStorage информация по ключу dayProducts и если есть, то выводим продукты на страницу
if (localStorage.getItem('dayProducts')) { 
  dayProducts = JSON.parse(localStorage.getItem('dayProducts'));
}

dayProducts.forEach((product) => { // отображаем продукты из localStorage на странице
  renderDayProduct(product);
})

renderIndicators(dayProducts);
renderChart();




export {dayProducts};