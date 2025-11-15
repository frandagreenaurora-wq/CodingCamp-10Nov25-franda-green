/// Temporary storage for todo items
let todos = [];

function addTodo() {
    const todoinput = document.getElementById("todo-input");
    const tododate = document.getElementById("todo-date")

    /// Validation
    if (todoinput.value === '' || tododate.value === '') {
        alert ("Please fill in both fields.");
        return;
    } else {
        /// Add todo item to the list
        todos.push({ text: todoinput.value, date: tododate.value });
        todoinput.value = '';
        tododate.value = '';

        renderTodos();
    }
}
/// function to render todo items to the DOM
function renderTodos() {
    /// Get the todo list container
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})
            </span></p>
            <hr />
        </li> `;
        
    });
}

/// Delete all todos
function deleteTodos() {
    if (todos.length === 0) {
        alert("Tidak ada todo untuk dihapus.");
        return;
    }

    if (confirm("Hapus semua todo?")) {
        todos = [];          // Kosongkan array
        renderTodos();       // Render ulang
    }
}

/// Filter todos berdasarkan tanggal
function filterTodos() {
    const filterDate = document.getElementById("todo-date").value;

    if (filterDate === "") {
        alert("Pilih tanggal untuk memfilter.");
        return;
    }

    const filtered = todos.filter(todo => todo.date === filterDate);

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (filtered.length === 0) {
        todoList.innerHTML = `<li>No todos found on ${filterDate}</li>`;
        return;
    }

    filtered.forEach(todo => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} 
            <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr/>
        </li>`;
    });
}

   