import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Nav() {
	const [transaction, setTransactions] = useState([]);
	//THE AMOUNT ARR
	// const [arrr, setArrr] = useState([]);
	// // THE TOtAL NUMBER
	const [total, setTotal] = useState();

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

	// const all = () => {
	// 	let total = [];
	// 	for (let i = 0; i < transaction.length; i++) {
	// 		total.push(transaction[i].amount);
	// 	}
	// 	let answer = total.reduce((a, b) => a + b);
	// 	console.log(answer);
	// 	setTotal(answer);
	// };

	// console.log(All());

	const mapping = transaction.map((e) => e.amount);
	const reducing = mapping.reduce((a, b) => a + b);
	console.log(mapping);
	console.log(reducing);

	return (
		<div id="mainNav">
			<h1>
				<Link to="/transactions">Budget</Link>
			</h1>
			<button>
				<Link to="/transactions/new">NEW TRANSACTION</Link>
			</button>
		</div>
	);
}
// #Todo
// The bank account CSS changes depending on the amount in the bank account

export default Nav;
