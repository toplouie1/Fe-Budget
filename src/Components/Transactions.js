import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Transactions() {
	// creating a state
	const [transaction, setTransaction] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/transactions")
			.then((res) => {
				setTransaction(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				throw err;
			});
	}, []);
	return (
		<div>
			<div>
				{transaction.map((each, index) => {
					return (
						<div className="allTransactions">
							<div>{each.date}</div>
							<div>
								<Link to={`/transactions/${index}`}>{each.from}</Link>
							</div>
							<div>{each.amount}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Transactions;
