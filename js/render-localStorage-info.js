//отображение на странице данных из localStorage
const newProductContainer = document.querySelector('.products-add__container'); // место в разметке куда добавляем новые продукты

const renderNewProduct = (product) => { // добавляем продукт на страницу(раздел добавить продукт)
  const productTemplate = document.querySelector('#product-add').content.querySelector('.product-add'); // находим шаблон в разметке
  const newProduct = productTemplate.cloneNode(true);

  // подставляем в шаблон значения из инпутов(через объект)
  newProduct.querySelector('.product-add__name').textContent = product.name;
  newProduct.querySelector('.product-add__calories').textContent = product.calories;
  newProduct.querySelector('.product-add__proteins').textContent = product.proteins;
  newProduct.querySelector('.product-add__fats').textContent = product.fats;
  newProduct.querySelector('.product-add__carbohydrates').textContent = product.carbohydrates;
  newProductContainer.append(newProduct);
}

export {renderNewProduct};