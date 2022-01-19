import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div id="mainNav">
			<h1>
				<Link to="/transactions">Budget App</Link>
			</h1>
			<button>
				<Link to="/transaction/new">NEW TRANSACTION</Link>
			</button>
		</div>
	);
}

export default Nav;
