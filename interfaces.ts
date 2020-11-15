// function showTodo(todo: { title: string; text: string }) {
//   console.log(`${todo.title}: ${todo.text}`);
// }

// showTodo({ title: 'Trash', text: 'Take out trash' });

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  const { title, text } = todo;
  console.log(`${title}: ${text}`);
}

showTodo({ title: 'Trash', text: 'Take out trash' });
