//отображение на странице данных из localStorage
const newProductContainer = document.querySelector('.products-add__container'); // место в разметке, куда добавляем новые продукты
const dayProductsContainer = document.querySelector('.day__products'); // место в разметке, куда добавляем продукты за день

const renderNewProduct = (product) => { // добавляем продукт на страницу(раздел добавить продукт)
  const productTemplate = document.querySelector('#product-add').content.querySelector('.product-add'); // находим шаблон в разметке
  const newProduct = productTemplate.cloneNode(true);
  newProduct.id = product.id;
  // подставляем в шаблон значения из инпутов(через объект)
  newProduct.querySelector('.product-add__name').textContent = product.name;
  newProduct.querySelector('.product-add__calories').textContent = product.calories;
  newProduct.querySelector('.product-add__proteins').textContent = product.proteins;
  newProduct.querySelector('.product-add__fats').textContent = product.fats;
  newProduct.querySelector('.product-add__carbohydrates').textContent = product.carbohydrates;
  newProductContainer.append(newProduct);
}

const renderDayProduct = (product) => { // добавляем продукт на страницу(раздел за сегодня)
  const dayProductTemplate = document.querySelector('#product').content.querySelector('.product'); // находим шаблон в разметке
  const dayProduct = dayProductTemplate.cloneNode(true);
  dayProduct.id = product.id;
  // подставляем в шаблон значения из карточки продукта(через объект)
  dayProduct.querySelector('.product__name').textContent = product.name;
  dayProduct.querySelector('.product__calories').textContent = product.calories;
  dayProduct.querySelector('.product__proteins').textContent = product.proteins;
  dayProduct.querySelector('.product__fats').textContent = product.fats;
  dayProduct.querySelector('.product__carbohydrates').textContent = product.carbohydrates;
  dayProduct.querySelector('.product__weight').textContent = product.weight;

  dayProductsContainer.append(dayProduct);
}

export {renderNewProduct, renderDayProduct};