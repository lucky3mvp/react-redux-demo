import React from 'react'
import { createAddAction, createDelAction, createUpdateAction } from './action'

export default class App extends React.Component{
	constructor (props) {
 		super(props);
 	}
	addTodo (e){
		let id = new Date();
		let { dispatch } = this.props;
		let text = this.refs.addTodoIpt.value;

		if(text == '') return;

		dispatch( createAddAction( {text: text, id: id, done:false} ) );

		this.refs.addTodoIpt.value = "";
	}
	delTodo (e){
		let { dispatch } = this.props;
		let id = e.target.id;

		dispatch( createDelAction( {id: id} ) );
	}
	// updateTodo = (e) => {
	// 	let { dispatch } = this.props;
	// 	let id = e.target.value;
	// 	dispatch( createUpdateAction( {id: id, done:e.target.checked} ) );
	// };
	updateTodo (e) {
		let { dispatch } = this.props;
		let { actions } = this.props;
		let id = e.target.value;
		dispatch( createUpdateAction( {id: id, done:e.target.checked} ) );
	}
	render () {
		let { todoList } = this.props;
		// let { updateTodo } = this.props;
		return (
			<div className="todo">
				<h1 className="heading"> Todos </h1>
				<ul>{
					todoList.map(
						(todoItem, index) => {
							let line = todoItem.done ? "line-through" : "";
							return (
								<li key={todoItem.id}>
									<label>
										<input
											type="checkbox" 
											onChange={this.updateTodo.bind(this)} 
											checked={todoItem.done} className="cbx" 
											value={todoItem.id} 
										/>
										{/* <input type="checkbox" onChange={updateTodo} checked={todoItem.done} className="cbx" value={todoItem.id} />
											 */}
										<span className={line}>{todoItem.text}</span>
									</label>
									<a className="del" 
										onClick={this.delTodo.bind(this)} 
										href="javascript:;" 
										id={todoItem.id}
									>
										X</a>
								</li> 
							)
						}
					)
				}</ul>
				<div className="footer">
					<input type="text" className="ipt" placeholder="请输入..." ref="addTodoIpt"/>
					<a href="javascript:;" className="btn" onClick={this.addTodo.bind(this)}>添加</a>
				</div>
			</div>
		)
	}
}