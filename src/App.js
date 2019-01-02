import React, { Component } from 'react';
import MainModule from './components/MainModule/MainModule';
import './App.module.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MainModule />
			</div>
		);
	}
}

export default App;
