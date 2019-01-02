import React, { Component } from 'react';
import MainModule from './components/MainModule/MainModule';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MainModule />
				<Footer /> 
			</div>
		);
	}
}

export default App;
