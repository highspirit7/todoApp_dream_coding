const filteredTodos = (status, todos) => {
  switch (status) {
    case "all":
      return todos;
    case "active":
      return todos.filter((item) => !item.completed);
    case "completed":
      return todos.filter((item) => item.completed);
    default:
      return todos;
  }
};

export { filteredTodos };
