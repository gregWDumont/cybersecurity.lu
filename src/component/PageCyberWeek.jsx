import React from "react";
import "./PageCyberWeek.css";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getUrlParameter } from "../utils/url.jsx";
import Tab from "./tab/Tab.jsx";
import CyberWeekPresentation from "./pagecyberweek/CyberWeekPresentation.jsx";
import CyberWeekProgramme from "./pagecyberweek/CyberWeekProgramme.jsx";
import CyberWeekSponsor from "./pagecyberweek/CyberWeekSponsor.jsx";
import CyberWeekSponsors from "./pagecyberweek/CyberWeekSponsors.jsx";
import CyberWeekBecomeASponsor from "./pagecyberweek/CyberWeekBecomeASponsor.jsx";
import CyberWeekGala from "./pagecyberweek/CyberWeekGala.jsx";
import CyberWeekContactUs from "./pagecyberweek/CyberWeekContactUs.jsx";
import CyberWeekRegister from "./pagecyberweek/CyberWeekRegister.jsx";

export default class PageCyberWeek extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tabs: [
				"About",
				"Programme",
				"Sponsoring",
				"Become_a_sponsor",
				"Sponsors",
				"Gala",
				"Contact",
				"Register",
			],
			selectedMenu: null,
		};
	}

	componentDidMount() {
		if (getUrlParameter("tab") !== null && this.state.tabs.indexOf(getUrlParameter("tab")) >= 0) {
			this.setState({ selectedMenu: getUrlParameter("tab") });
		}
	}

	componentDidUpdate() {
		if (this.state.selectedMenu !== getUrlParameter("tab")
			&& this.state.tabs.indexOf(getUrlParameter("tab")) >= 0) {
			this.setState({ selectedMenu: getUrlParameter("tab") });
		}
	}

	onMenuClick(m) {
		this.props.history.push("?tab=" + m);
	}

	render() {
		return (
			<div id="PageCyberWeek" className={"page max-sized-page"}>
				<div className="row">
					<div className="col-md-12">
						<Breadcrumb>
							<Breadcrumb.Item><Link to="/">CYBERSECURITY LUXEMBOURG</Link></Breadcrumb.Item>
							<Breadcrumb.Item><Link to="/cybersecurityweek">CYBERSECURITY WEEK LUXEMBOURG</Link></Breadcrumb.Item>
						</Breadcrumb>
					</div>

					<div className="col-md-12">
						<Tab
							onMenuClick={(m) => this.onMenuClick(m)}
							selectedMenu={this.state.selectedMenu}
							labels={[
								"About CSWL 2022",
								"Programme",
								"Sponsoring",
								"<div style='font-size:12px'>&nbsp;&nbsp;- Become a sponsor</div>",
								"<div style='font-size:12px'>&nbsp;&nbsp;- Sponsors</div>",
								"Gala & Awards Night",
								"Contact us",
								"Register",
							]}
							keys={this.state.tabs}
							content={[
								<CyberWeekPresentation
									key={this.state.tabs[0]}
									analytics={this.props.analytics}
								/>,
								<CyberWeekProgramme
									key={this.state.tabs[1]}
									analytics={this.props.analytics}
								/>,
								<CyberWeekSponsor
									key={this.state.tabs[2]}
									analytics={this.props.analytics}
								/>,
								<CyberWeekBecomeASponsor
									key={this.state.tabs[3]}
									analytics={this.props.analytics}
								/>,
								<CyberWeekSponsors
									key={this.state.tabs[4]}
									analytics={this.props.analytics}
								/>,
								<CyberWeekGala
									key={this.state.tabs[5]}
									analytics={this.props.analytics}
								/>,
								<CyberWeekContactUs
									key={this.state.tabs[6]}
									analytics={this.props.analytics}
								/>,
								<CyberWeekRegister
									key={this.state.tabs[7]}
									analytics={this.props.analytics}
								/>,
							]}
						/>
					</div>
				</div>
			</div>
		);
	}
}
