import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div id="mainNav">
			<div>
				<Link to="/">Captain's Log</Link>
			</div>
			<button>
				<Link to="/transaction/new">NEW TRANSACTION</Link>
			</button>
		</div>
	);
}

export default Nav;
