import {createContext, useState} from "react";

export const TodosContext = createContext();

export const TodosProvider = ({children}) => {

    const [todos, setTodos] = useState([]);
    const refreshTodos = async () => {
        try {
            const res = await fetch('/api/getTodos')
            const latestTodos = await res.json();
            setTodos(latestTodos);
        } catch(error) {
            console.error(error)
        }
    }

    const addTodo = async (description) => {
        try {
            const res = await fetch('/api/createTodo', {
                method: 'POST',
                body: JSON.stringify({description}),
                header: {'Content-Type': 'appliction/json'}
            })
            const newTodo = await res.json();
            setTodos((prevTodos) => {
                return [newTodo, ...prevTodos]
            });
        } catch(error) {
            console.error(error)
        }
    }

    const updateTodo = async (updatedTodo) => {
        try {
            const res = await fetch('/api/updateTodo', {
                method: 'PUT',
                body: JSON.stringify({updatedTodo}),
                header: {'Content-Type': 'appliction/json'}
            });
            await res.json();
            setTodos((prevTodos) => {
                const existingTodos = [...prevTodos];
                const existingTodo = existingTodos.find(todo => todo.if === updatedTodo.id);
                existingTodo.fields = updatedTodo.fields;
                return existingTodos;
            });
        } catch(error) {
            console.error(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            await fetch('/api/deleteTodo', {
                method: 'DELETE',
                body: JSON.stringify({id}),
                header: {'Content-Type': 'appliction/json'}
            });
            setTodos((prevTodos) => {
                return prevTodos.filter((todo) => todo.id !== id);
            });
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <TodosContext.Provider value={{
            todos,
            setTodos,
            refreshTodos,
            updateTodo,
            deleteTodo,
            addTodo,
        }}
        > 
            {children} 
        </TodosContext.Provider>
    );
};
