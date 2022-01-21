import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
	// creating a state
	const [transactions, setTransactions] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/transactions`)
			.then((res) => {
				setTransactions(res.data);
			})
			.catch((err) => {
				throw err;
			});
	}, []);

	const mapping = transactions.map((each, index) => {
		return (
			<div key={index} className="allTransactions">
				<div>{each.date}</div>
				<div>
					<Link to={`/transactions/${index}`}>{each.from}</Link>
				</div>
				<div>$ {each.amount}</div>
			</div>
		);
	});
	return (
		<div>
			<div>{mapping}</div>
			<div className="homeBtn">
				<button>
					<Link to="/">Home</Link>
				</button>
			</div>
		</div>
	);
}

export default Transactions;
