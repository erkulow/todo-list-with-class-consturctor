import React, { Component } from 'react'
import './App.css'
import ToDoItems from './components/addTodo/ToDoItems'
import ToDoList from './components/toDoList/ToDoList'

class App extends Component {
	constructor() {
		super()
		this.state = {
			items: [],
			text: '',
		}
	}
	componentDidMount() {
		const row = localStorage.getItem('todo')
		this.setState({ items: JSON.parse(row) || [] })
	}
	componentDidUpdate() {
		localStorage.setItem('todo', JSON.stringify(this.state.items))
	}

	handleInput = (e) => {
		this.setState({ text: e.target.value })
	}
	addItem = (e) => {
		e.preventDefault()
		if (this.state.text !== '') {
			const currentItem = {
				text: this.state.text,
				date: new Date().toLocaleDateString(),
				key: Date.now().toString(),
				completed: false,
			}
			this.setState({
				items: [...this.state.items, currentItem],
			})
			this.setState({
				text: '',
			})
		}
	}
	deleteItem = (e) => {
		console.log(e)
		let array = this.state.items
		const filteredItems = array.filter((el) => {
			return el.key !== e.target.id
		})
		this.setState({
			items: filteredItems,
		})
	}
	chechedItem = (e) => {
		console.log(e)
		let array = this.state.items
		const checkedItemArray = array.map((el) => {
			if (el.key === e.target.id) {
				el.completed = !el.completed
			}
			return el
		})
		this.setState({
			items: checkedItemArray,
		})
		console.log(this.state.items)
	}

	render() {
		return (
			<div className='App'>
				<ToDoList
					addItem={this.addItem}
					inputElement={this.inputElement}
					handleInput={this.handleInput}
					currentItem={this.state.currentItem}
					text={this.state.text}
				/>
				<ToDoItems
					data={this.state.items}
					deleteItem={this.deleteItem}
					chechedItem={this.chechedItem}
				/>
			</div>
		)
	}
}
export default App
