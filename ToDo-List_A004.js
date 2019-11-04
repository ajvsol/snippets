
function displayTodos() { // print current todos
	console.log('My todos:', todos);
}

function addTodo(todo) { // todo is a new variable which your function will take
	todos.push(todo); // the parameter of the function uses the variable at this point within the function
	displayTodos; // shows your updated todos list after
}

function changeTodo(position, newValue) {
	todos[position] = newValue; // choose which todo to update, then the value it should now be. Also note, position starts from 0 not 1
	displayTodos(); // displays the todos after you update it
}

function deleteTodo(position) {
 	todos.splice(position, 1); // position and 1 for number of items to delete
 	displayTodos();
}
