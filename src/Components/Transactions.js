import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
	// let { index } = useParams();
	// let navigate = useNavigate();

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
	// const handleDelete = () => {
	// 	axios
	// 		.delete(`${API}/transactions/${index}`)
	// 		.then((res) => {
	// 			navigate("/transactions");
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const mapping = transactions.map((each, index) => {
		return (
			<div key={index} className="allTransactions">
				<div>{each.date}</div>
				<div>
					<Link to={`/transactions/${index}`}>{each.from}</Link>
				</div>
				<div>$ {each.amount}</div>
				<Link className="linkColor" to={`/transactions/${index}`}>
					<img src="https://img.icons8.com/windows/32/000000/edit--v4.png" />
				</Link>
			</div>
		);
	});
	return (
		<div>
			<div className="headers">
				<div>Date</div>
				<div>From</div>
				<div>Amount</div>
				<div>Edit</div>
			</div>
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
