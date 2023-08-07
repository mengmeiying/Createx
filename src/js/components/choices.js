const elements = document.querySelectorAll('.contacts-us__select');
elements.forEach(el => {
  const choices = new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false
  });
})


