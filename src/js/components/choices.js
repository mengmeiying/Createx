const elements = document.querySelectorAll('.contacts-us__select');
elements.forEach(el => {
  const choices = new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false
  });
})

const elementsPositions = document.querySelectorAll('.positions-modal__select');
elementsPositions.forEach(el => {
  const choices2 = new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false
  });
})


