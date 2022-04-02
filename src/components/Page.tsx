import React from "react";
import ToDoList from "./ToDoList";
import ToDoTitle from "./ToDoTitle";

function Page() {
	return (
		<div>
			<ToDoTitle />
			<ToDoList />
		</div>
	)
}

export default Page;