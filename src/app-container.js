import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppUI from './app-ui'
import { createUpdateAction } from './action'

export default connect(
	(state) => { 
		return { todoList: state}
	}
	// ,
	// (dispatch,ownProps) => { 
	// 	return {
	// 		updateTodo: (e) => dispatch( createUpdateAction( {id: e.target.value, done:e.target.checked} ) )
	// 	}
	// }
)(AppUI)