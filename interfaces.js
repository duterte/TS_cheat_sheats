// function showTodo(todo: { title: string; text: string }) {
//   console.log(`${todo.title}: ${todo.text}`);
// }
function showTodo(todo) {
    console.log(todo.title + ": " + todo.text);
}
showTodo({ title: 'Trash', text: 'Take out trash' });