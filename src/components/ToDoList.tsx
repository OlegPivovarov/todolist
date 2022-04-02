import React, { useState } from "react";
import { idText } from "typescript";


export interface idlist {
	id: number,
	name: string
}
const bazeInit: Array<idlist> = [
	{ id: 1, name: "wake up" },
	{ id: 2, name: "go to bathroom" },
	{ id: 3, name: "eat" },
	{ id: 4, name: "sleep" }
]


function ToDoList() {

	const [baze, setBaze] = useState(bazeInit);

	function remove(id: number) {
		setBaze(baze.filter(task => task.id !== id))
	}
	function add() {
		const addBaze = [...baze];
		addBaze.push({ id: addBaze.length + 1, name: "qwe" })
		setBaze(addBaze)
	}
	return (
		<div>
			{
				baze.map(task => {
					return (
						<div>{task.name}<button onClick={() => { remove(task.id) }}>complete</button></div>
					)
				})
			}
			
			<button onClick={() => { add() }}>+</button>
		</div>
	)
}

export default ToDoList;