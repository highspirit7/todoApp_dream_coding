const filteredTodos = (status, todos) => {
  switch (status) {
    case "all":
      return todos;
    case "active":
      return todos.filter((item) => !item.done);
    case "completed":
      return todos.filter((item) => item.done);
    default:
      return todos;
  }
};

export { filteredTodos };
