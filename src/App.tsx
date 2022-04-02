import React from 'react';
import logo from './logo.svg';
import './App.css';
import { idlist } from './components/ToDoList';
import Page from './components/Page';

interface ToDoListInterface {
	title: string,
	baze: Array<idlist>
}

function App() {
	function udalenie() { }
	return (
		<Page />
	);
}

export default App;
