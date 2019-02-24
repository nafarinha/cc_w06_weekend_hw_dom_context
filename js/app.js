document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const driverListItem = createDriverListItem(event.target);
  const driverList = document.querySelector('#driver-list');
  driverList.appendChild(driverListItem);

  event.target.reset();
}

const createDriverListItem = function (form) {
  const driverListItem = document.createElement('li');
  driverListItem.classList.add('driver-list-item');

  const name = document.createElement('p');
  name.textContent = form.name.value;
  driverListItem.appendChild(name);

  const nationality = document.createElement('p');
  nationality.textContent = form.nationality.value;
  driverListItem.appendChild(nationality);

  const championships = document.createElement('p');
  championships.textContent = form.championships.value;
  driverListItem.appendChild(championships);

  return driverListItem;
}
