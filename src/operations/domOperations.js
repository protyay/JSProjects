import storageOperations from './storageOperations.js';

const domOperations = {
  appendToTaskList(input, toAdd = true, parentNode, collectionKey) {
    const liElement = document.createElement('li');
    liElement.classList.add('collection-item');
    const textNode = document.createTextNode(input);
    const link = document.createElement('a');
    link.classList.add('delete-item');
    link.classList.add('secondary-content');
    link.innerHTML = '<i class="fa fa-remove"></i>';
    liElement.appendChild(textNode);
    liElement.appendChild(link);
    // console.log(liElement);
    parentNode.appendChild(liElement);
    if (toAdd) {
      storageOperations.addUpdatedListToLocalStorage(input, collectionKey);
    }
    return liElement;
  },

};
export {
  domOperations as default,
};
