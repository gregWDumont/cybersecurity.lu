import React from "react";
import "./CyberWeekSponsor.css";
import ShadowBox from "../box/ShadowBox.jsx";

export default class CyberWeekSponsor extends React.Component {
	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div id={"CyberWeekSponsor"}>
				<div className="row row-spaced">
					<div className="col-md-12">
						<h2>Sponsors</h2>
					</div>

					<div className="col-md-6">
						<ShadowBox
							link="cybersecurityweek?tab=Become_a_sponsor"
							title={"Become a sponsor"}
							icon={"fas fa-handshake"}
							color={"blue"}
						/>
					</div>
					<div className="col-md-6">
						<ShadowBox
							link="cybersecurityweek?tab=Sponsors"
							title={"View the sponsors"}
							icon={"fas fa-eye"}
							color={"blue"}
						/>
					</div>
				</div>

				<div className="row row-spaced"/>
				<div className="row row-spaced"/>
				<div className="row row-spaced"/>
			</div>
		);
	}
}
