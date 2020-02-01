import domOperations from './operations/domOperations.js';
import storageOperations from './operations/storageOperations.js';

const taskListKey = 'taskListKey';
const taskInput = document.querySelector('input#task-input');
const submitTaskBtn = document.querySelector('#submit-task-btn');
const ulCollection = document.querySelector('ul#task-collection');
const filterInput = document.querySelector('input#filter');
const clearTaskBtn = document.querySelector('#clear-task-btn');


submitTaskBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (taskInput.value) {
    domOperations.appendToTaskList(taskInput.value, true, ulCollection, taskListKey);
    taskInput.value = '';
  } else {
    // console.log('Please enter some task to add');
    // alert('Please enter a valid value before submitting');
  }
});


function loadEventListeners() {
  ulCollection.addEventListener('click', (evt) => {
    const targetParentElement = evt.target.parentElement;
    if (targetParentElement.classList.contains('delete-item')) {
      targetParentElement.parentElement.remove();
    }
    // Get the inner text From the parent element
    const innerText = targetParentElement.parentElement;
    // console.log(innerText);
    storageOperations.delElementByKey(innerText, taskListKey);
  });

  clearTaskBtn.addEventListener('click', () => {
    // console.log('Inside event click for clear btn');
    const allChildren = Array.from(ulCollection.children);
    allChildren.forEach((value) => {
      value.remove();
    });
    // Clear local Storage
    storageOperations.clearLocalStorageByKey(taskListKey);
  });

  filterInput.addEventListener('keyup', () => {
    const allInnerText = document.querySelectorAll('.collection-item');
    const searched = filterInput.value.toLowerCase();
    allInnerText.forEach((value) => {
      if (value.textContent.toLowerCase().indexOf(searched) !== -1) {
        value.style.display = 'block';
      } else {
        value.style.display = 'none';
      }
    });
  });
}


function loadSavedTaskList() {
  const allTasks = storageOperations.getAllTaskFromLocalStorage(taskListKey);
  // console.log(allTasks);
  if (allTasks !== null) {
    allTasks.forEach((task) => {
      // console.log("task retrieved from LS while loading ", task);
      domOperations.appendToTaskList(task, false, ulCollection);
    });
  }
}


loadSavedTaskList();
loadEventListeners();
