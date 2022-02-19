import React, { Component } from 'react'
import './ToDoList.css'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'

class ToDoList extends Component {
	render() {
		return (
			<div className='todoListMain'>
				<div className='header'>
					<form onSubmit={this.props.addItem.bind(this)}>
						<Input
							placeholder='Task'
							onChange={this.props.handleInput}
							type='text'
							value={this.props.text}
						/>
						<Button type='submit'> Добавить задачу </Button>
					</form>
				</div>
			</div>
		)
	}
}

export default ToDoList
