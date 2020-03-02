import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: false,
		city: '',
		temp: '',
		humidity: ''
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("Want to search for: " + this.state.city);
		// this.setState({
		// 	city: '',
		// });
		const city = this.state.city

		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			this.setState({
				report: true,
				temp: data.main.temp,
				humidity: data.main.humidity
			})
		});
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity
					props={this.state}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
					/>

					{
						this.state.report
						? (
							<WeatherReport
							city={this.state.city}
							temp={this.state.temp}
							humidity={this.state.humidity} />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
