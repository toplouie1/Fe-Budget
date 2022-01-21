import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div id="mainNav">
			<h1>
				<Link to="/transactions">Budget</Link>
			</h1>
			<button>
				<Link to="/transactions/new">New</Link>
			</button>
		</div>
	);
}

export default Nav;
