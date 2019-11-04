var todoList = {
  todos: ['item 1', 'item 2', 'item 3'], // 1) todos array is in an object
  displayTodos: function() { // has a displayTodos method
    console.log('My Todos', this.todos);
  },
  addTodos: function(todo) { // has an addTodo method
    this.todos.push(todo); // 'this' is added because you're referring the todoList object that this function is contained within
    this.displayTodos(); 
  },
  changeTodo: function(position, newValue) { //has a changeTodo method
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
