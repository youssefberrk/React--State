import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Person: {
				fullName: "Youssef Berrakouan",
				bio: "Retired NASA engineer who worked on the Mars rover projects.",
				imgSrc:
					"https://media.licdn.com/dms/image/v2/D4E03AQEmhFsJwAweBA/profile-displayphoto-shrink_400_400/B4EZQhnTruHsAk-/0/1735730740414?e=1761177600&v=beta&t=5kdV70e4q1xteLEibOIFhK9DTj9Lid5zmdS4puN92m8", // replace with your own image URL
				profession: "Frontend Developer",
			},
			shows: false,
			mountedTime: 0, // track seconds since mount
		};
		this.timer = null; // to store interval ID
	}

	componentDidMount() {
		// Start counting when component mounts
		this.timer = setInterval(() => {
			this.setState((prevState) => ({
				mountedTime: prevState.mountedTime + 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		// Clear interval when component unmounts
		clearInterval(this.timer);
	}

	toggleShow = () => {
		this.setState((prevState) => ({
			shows: !prevState.shows,
		}));
	};

	render() {
		const { Person, shows, mountedTime } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<h1>Profile Toggle</h1>
					{/* Timer field */}
					<p>⏱ Component mounted since: {mountedTime} seconds</p>

					{/* Toggle button */}
					<button onClick={this.toggleShow}>
						{shows ? "Hide Profile" : "Show Profile"}
					</button>

					{/* Conditionally render profile */}
					{shows && (
						<div className="profile-card">
							<img
								src={Person.imgSrc}
								alt={Person.fullName}
								style={{ borderRadius: "50%", marginTop: "20px" }}
							/>
							<h2>{Person.fullName}</h2>
							<p>{Person.bio}</p>
							<h4>{Person.profession}</h4>
						</div>
					)}
				</header>
			</div>
		);
	}
}

export default App;
