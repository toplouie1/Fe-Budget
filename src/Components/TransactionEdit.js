import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionEdit() {
	let { index } = useParams();
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		amount: "",
		from: "",
	});
	const navigate = useNavigate();

	const handleTextChange = (event) => {
		setTransaction({ ...transaction, [event.target.id]: event.target.value });
	};
	useEffect(() => {
		axios
			.get(`${API}/transactions/${index}`)
			.then((res) => {
				setTransaction(res.data);
			})
			.catch((err) => {
				navigate("not-found");
			});
	}, [index]);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/transactions/${index}`, transaction)
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

export default TransactionEdit;
