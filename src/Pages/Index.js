import React from "react";
import Transactions from "../Components/Transactions";
import { useEffect, useState } from "react";
import axios from "axios";

function Index() {
	// // THE TOtAL NUMBER
	const [total, setTotal] = useState(0);
	// yes or no
	const [greater, setGreater] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:8000/transactions")
			.then((res) => {
				setTotal(all(res.data));
				change(total);
			})
			.catch((err) => {
				throw err;
			});
	}, []);

	let change = (total) => {
		total > 1 ? setGreater(true) : setGreater(false);
	};

	const all = (e) => {
		let total = [];
		for (let i = 0; i < e.length; i++) {
			total.push(e[i].amount);
		}
		return total.reduce((a, b) => a + Number(b), 0);
	};
	return (
		<div>
			<h1 className="totalAmount">
				Bank Account Total:{" "}
				<span className={`${greater ? "greater" : "lesser"}`}>{total}</span>
			</h1>
			<h1 className="homeFirstHeader">Index Page</h1>
			<Transactions />
		</div>
	);
}

export default Index;
