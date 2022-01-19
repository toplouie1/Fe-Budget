import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Transactions() {
	// creating a state
	const [transactions, setTransactions] = useState([]);

	console.log(transactions);
	useEffect(() => {
		axios
			.get("http://localhost:8000/transactions")
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
				<div>{each.amount}</div>
			</div>
		);
	});
	return (
		<div>
			<div>{mapping}</div>
		</div>
	);
}

export default Transactions;
