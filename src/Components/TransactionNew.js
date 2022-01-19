import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionNew() {
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		ampount: "",
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
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					value={transaction.name}
					type="text"
					onChange={handleTextChange}
					placeholder="Name"
					required
				/>
				<label htmlFor="date">Date : </label>
				<input
					id="date"
					value={transaction.date}
					type="text"
					onChange={handleTextChange}
					placeholder="Date"
					required
				/>
				<label htmlFor="name">Amount :</label>
				<input
					id="amount"
					value={transaction.amount}
					type="number"
					onChange={handleTextChange}
					placeholder="$"
					required
				/>
				<label htmlFor="name">From :</label>
				<input
					id="from"
					value={transaction.from}
					type="text"
					onChange={handleTextChange}
					placeholder="From ..."
					required
				/>
				<input type="submit" />
			</form>
		</div>
	);
}

export default TransactionNew;
