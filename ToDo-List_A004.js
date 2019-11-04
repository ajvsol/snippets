var todoList = {
  todos: [], // removed the simple text array
  displayTodos: function() { 
    console.log('My Todos', this.todos);
  },
  addTodos: function(todoText) { 
    this.todos.push({ // 'this' is added because you're referring the todoList object that this function is contained within. Swapped todo parameter for a method
      todoText: todoText, // 1st one is the static property name, 2nd one is referring to the dynamic parameter for this method
      completed: false
    }); 
    this.displayTodos(); 
  },
  changeTodo: function(position, todoText) { // more descriptive parameter name to use todoText than newValue
    // this.todos[position] = newValue; // old version, new version can access the property rather than the whole object
    this.todos[position].todoText = todoText
    this.displayTodos();
  },
  deleteTodo: function(position) { 
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) { 
    var todo = this.todos[position];
    todo.completed = !todo.completed; // this will flip it to true or false, the opposite of what it is initially
    this.displayTodos();
  }
};