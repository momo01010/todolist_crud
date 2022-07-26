const taskDB = [
  {
    id: 1,
    title: "Clean house",
    description: 'clean all the house',
    completed: false,
  },
  {
    id: 2,
    title: "homework",
    description: "make exercise of todolist at node.js",
    completed: false,
  },
  {
    id: 3,
    title: "dinner",
    description: "with friends at suh¡shiito",
    completed: false,
  },
  {
    id: 4,
    title: "market",
    description: "go to market to bought food",
    completed: false,
  },
];

/*
   {
    id,
    title: '', 
    description: '',
    completed: false
    }
*/

const getAllMyTasks = () => {
  return taskDB;
};

const getTaskById = (id) => {
  const filteredDB = taskDB.filter((taskItem) => taskItem.id === id);
  return filteredDB[0];
};

const createTask = (taskObj) => {
  if (taskDB.length === 0) {
    const newTask = {
      id: 1,
      title: taskObj.title,
      description: taskObj.description,
      completed: taskObj.completed,
    };
    taskDB.push(newTask);
    return newTask;
  }
  const newTask = {
    id: taskDB[taskDB.length - 1].id + 1,
    title: taskObj.title,
    description: taskObj.description,
    completed: taskObj.completed,
  };
  taskDB.push(newTask);
  return newTask;
};

const deleteTaskItem = (id) => {
  const index = taskDB.findIndex((item) => item.id === id);
  if (index !== -1) {
    taskDB.splice(index, 1);
    return true;
  }
};

const updateTaskItem = (id, data) => {
  const index = taskDB.findIndex((item) => item.id === id);
  if (data.completed !== undefined) {
    taskDB[index] = {
      id,
      title: taskDB[index].title,
      description: taskDB[index].description,
      completed: data.completed
    };
    return taskDB[index]
  }
};

module.exports = {
  getAllMyTasks,
  getTaskById,
  createTask,
  deleteTaskItem,
  updateTaskItem
};
