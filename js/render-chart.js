// раздел с графиком

const currentCalories = document.querySelector('.chart__info--current-calories'); // место в разметке, куда записыаем потребленные за день калории
const proteinsCount = document.querySelector('.chart__info-more--proteins-count'); // сюда записываем количество белков
const fatsCount = document.querySelector('.chart__info-more--fats-count'); // сюда записываем количество жиров
const carbohydratesCount = document.querySelector('.chart__info-more--carbohydrates-count'); // сюда записываем количество углеводов

const chartFill = document.querySelector('.chart__line--fill'); // элемент графика потребленных калорий

// Отображение числовых значений
const getSumm = (array) => {
  if (array.length == 0) {
    currentCalories.textContent = 0;
    proteinsCount.textContent = 0;
    fatsCount.textContent = 0;
    carbohydratesCount.textContent = 0;
  } else {
    return array.reduce((a, b) => a + b)
  }
}

const getAllCalories = (array) => {
  let allCalories = [];
  array.forEach(product => {
    allCalories.push(product.calories);
  })
  return getSumm(allCalories);
}

const getAllProteins = (array) => {
  let allProteins = [];
  array.forEach(product => {
    allProteins.push(product.proteins);
  })
  return getSumm(allProteins);
}

const getAllFats = (array) => {
  let allFats = [];
  array.forEach(product => {
    allFats.push(product.calories);
  })
  return getSumm(allFats);
}

const getAllCarbohydrates = (array) => {
  let allCarbohydrates = [];
  array.forEach(product => {
    allCarbohydrates.push(product.calories);
  })
  return getSumm(allCarbohydrates);
}

const renderIndicators = (array) => {
  currentCalories.textContent = getAllCalories(array);
  proteinsCount.textContent = getAllProteins(array);
  fatsCount.textContent = getAllFats(array);
  carbohydratesCount.textContent = getAllCarbohydrates(array);
}

// Отображение графика
const renderChart = () => {
  const maxCalories = document.querySelector('.chart__info--max-calories');// находим максимальное количество калорий за день
  const currentCalories = document.querySelector('.chart__info--current-calories');

  if (Number(maxCalories.textContent) === 0 || (Number(currentCalories.textContent) === 0)) { // Если количество калорий, потребленных за день равно 0, то
    chartFill.style.width = '0';
  } else {
    const widthFill = (Number(currentCalories.textContent) * 100) / Number(maxCalories.textContent);
    console.log(`"${widthFill}%"`)
    chartFill.style.width = `${widthFill}%`;
    chartFill.style.backgroundColor = '#1DB90F';

    if(Number(currentCalories.textContent) >= Number(maxCalories.textContent)) {
      chartFill.style.width = '100%';
      chartFill.style.backgroundColor = '#EB2020';
    }
  }
}


export {renderIndicators, renderChart};