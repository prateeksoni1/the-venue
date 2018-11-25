import React, { Component } from "react";
import Header from "./components/header_footer/Header";
import Featured from './components/featured'
import "./resources/styles.css";
import VenueNFO from "./components/venueNFO";

class App extends Component {
	render() {
		return (
			<div className="App" style={{
				height: '2000px',
				backgroundColor: 'cornflowerblue'
			}}>
				<Header />
				<Featured />
				<VenueNFO />
			</div>
		);
	}
}

export default App;
