import React from "react";
import { Link } from "react-router-dom";

function FourOFour() {
	return (
		<div>
			<h1 className="homeFirstHeader">Sorry, no page found :/</h1>
			<button className="newButton">
				<Link to="/">Go Back</Link>
			</button>
		</div>
	);
}

export default FourOFour;
