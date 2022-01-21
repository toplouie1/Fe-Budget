import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function TransactionNew() {
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		amount: 0,
		from: "",
	});
	const navigate = useNavigate();

	const handleTextChange = (event) => {
		setTransaction({ ...transaction, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:8000/transactions", transaction)
			.then((res) => {
				navigate("/transactions");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="newForm">
			<form onSubmit={handleSubmit}>
				<div>
					<input
						id="name"
						value={transaction.name}
						type="text"
						onChange={handleTextChange}
						placeholder="Name"
						required
					/>
				</div>
				<div>
					<input
						id="date"
						value={transaction.date}
						type="text"
						onChange={handleTextChange}
						placeholder="Date"
						required
					/>
				</div>

				<div>
					<input
						id="amount"
						value={transaction.amount}
						type="number"
						onChange={handleTextChange}
						placeholder="$"
						required
					/>
				</div>
				<div>
					<input
						id="from"
						value={transaction.from}
						type="text"
						onChange={handleTextChange}
						placeholder="From ..."
						required
					/>
				</div>

				<input className="newButton" type="submit" />
				<button className="newButton">
					<Link to="/transactions">Back</Link>
				</button>
			</form>
		</div>
	);
}

export default TransactionNew;
