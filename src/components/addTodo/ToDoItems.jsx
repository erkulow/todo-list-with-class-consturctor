import { Component } from 'react'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import './ToDoItems.css'

class ToDoItems extends Component {
	render() {
		return (
			<ul className='theList'>
				{this.props.data.map((item) => {
					return (
						<li key={item.key}>
							<Input
								checked={item.completed}
								type='checkbox'
								onChange={this.props.chechedItem.bind(this)}
								id={item.key}
							/>
							<p className={item.completed ? 'done' : 'task'}>
								{item.text}
								{item.date}
							</p>

							<Button
								id={item.key}
								onClick={this.props.deleteItem.bind(this)}
							>
								delete
							</Button>
						</li>
					)
				})}
			</ul>
		)
	}
}
export default ToDoItems
