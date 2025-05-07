import React, {useState} from "react";

//create your first component
const Home = () => {

	const [todolist, setTodolist] = useState([])
	const [newTodo, setnewTodo] = useState("")
	const [ShowX, setShowX] = useState(null)

	const handlePressKey = (e) => {

		if (e.key === "Enter") {
			setTodolist([...todolist, newTodo])
			setnewTodo("")
		}

	}

	const handleDelete = (indexToDelete) => {
		setTodolist(todolist.filter((elem, index) => index !== indexToDelete))
	}

	return (
		<div className="container">
			<div className="Titulo">Todos</div>
			<div className="contenedor-todo-list">
				<ul>
					<li>
						<input 
						type="text" 
						placeholder="What's to be done?"
						value = {newTodo}
						onChange={(e) => setnewTodo(e.target.value)}
						onKeyDown={handlePressKey}
						/>
					</li>
					{
						todolist.map((todo, index) => (
							<li key={index}
								onMouseOver={() => setShowX(index)}
								onMouseLeave={() => setShowX(null)}
							>{todo}
								{ShowX === index && <small onClick={() => handleDelete(index)}><i class="fa-solid fa-trash"></i></small>}
							</li>
						))
					}
					<li>{todolist.length === 0 ? " You don't have work to do! " : todolist.length + ' works to do '}</li>
				</ul>
			</div> 
		</div>
	);
};

export default Home;