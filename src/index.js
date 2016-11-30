import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './app-container'
import reducer from './reducer'
import './main.less'

let initialState = [{
	text:"学习react",
	id:0,
	done:true
}, {
	text:"写一个demo",
	id:1,
	done:false
}];

let store = createStore( reducer, initialState ); 

render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('main')
)


