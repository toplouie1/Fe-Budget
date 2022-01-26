import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
	const [transaction, setTransaction] = useState([]);
	// using params inorder to get the index Number ..

	let { index } = useParams();
	// naigate to places after something is done .
	let navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/transactions/${index}`)
			.then((res) => {
				// whatever data we recieve we will add it to the state ...
				setTransaction(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				navigate("/not-found");
			});
	}, []);

	const handleDelete = () => {
		axios
			.delete(`${API}/transactions/${index}`)
			.then((res) => {
				navigate("/transactions");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="showDetails">
			<div className="transactionDiv">
				<div className="transactionFirst">Name : {transaction.name}</div>
				<div className="transactionFirst">Date : {transaction.date}</div>
			</div>
			<div className="transactionDivv">
				<div className="transactionSecond">Amount : $ {transaction.amount}</div>
				<div className="transactionSecond">From : {transaction.from}</div>
			</div>

			<button onClick={handleDelete}>DELETE</button>
			<button>
				<Link to={`/transactions/${index}/edit`}>EDIT</Link>
			</button>
			<button>
				<Link to={"/transactions"}>BACK</Link>
			</button>
		</div>
	);
}

export default TransactionDetails;
