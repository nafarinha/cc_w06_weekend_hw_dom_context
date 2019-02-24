document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
}
