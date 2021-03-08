import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

//create your first component
export function TodoApp() {
	const [list, setList] = useState([]);
	const [task, setTask] = useState({});
	return (
		<>
			<div className="title">
				<h1>Todo List App</h1>
			</div>
			<div className="container">
				<form
					onSubmit={event => {
						list.push(task);
						setTask({ label: "" });
						event.preventDefault();
					}}>
					<input
						type="text"
						value={task.label}
						className="input"
						onChange={event => {
							setTask({ label: event.target.value, done: false });
						}}
						placeholder="Ingresa tu Tarea"
					/>
				</form>
				<div className="task-list">
					<hr></hr>
					<ul className="list-group">
						{list.length === 0
							? "No hay tareas, ingresa tu primer To Do"
							: ""}
						{list.map((item, index) => {
							return (
								<li key={index} className="list-group-item">
									{item.label}
									<a>
										<FontAwesomeIcon
											icon={faTrashAlt}
											color="white"
											className="trashIcon"
											onClick={() => {
												setList(
													list.filter(i => i !== item)
												);
											}}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<hr></hr>
				<div>
					Delete All
					<FontAwesomeIcon
						icon={faTrashAlt}
						color="white"
						className="trashIcon"
						onClick={() => {
							setList([]);
						}}
					/>
				</div>
				<hr></hr>
				<div>
					<strong>
						{list.length}{" "}
						{list.length === 1
							? "tarea pendiente"
							: "tareas pendientes"}
					</strong>
				</div>
			</div>
		</>
	);
}
