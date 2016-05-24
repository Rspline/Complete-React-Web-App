export function setSearchText(searchText) {
  return { type: 'SET_SEARCH_TEXT', searchText };
};

export function toggleShowCompleted() {
  return { type: 'TOGGLE_SHOW_COMPLETED' };
};

export function loadTasks(tasks) {
  return { type: 'LOAD_TASKS', tasks };
};

export function addTask(text) {
  return { type: 'ADD_TASK', text };
};

export function toggleTask(id) {
  return { type: 'TOGGLE_TASK', id };
};
