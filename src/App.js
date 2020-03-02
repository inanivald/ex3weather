import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity />

					{
						this.state.report
						? (
							<WeatherReport />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
