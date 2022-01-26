import React from "react";
import Transactions from "../Components/Transactions";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Index() {
	// // THE TOtAL NUMBER
	const [total, setTotal] = useState(0);
	// only the posiive numbers
	const [income, setIncome] = useState(0);
	// only the spent
	const [spent, setSpent] = useState(0);

	useEffect(() => {
		axios
			.get(`${API}/transactions`)
			.then((res) => {
				setTotal(all(res.data));
				setIncome(positive(res.data));
				setSpent(negative(res.data));
				console.log(income);
			})
			.catch((err) => {
				throw err;
			});
	}, []);

	const positive = (e) => {
		let total = [];
		for (let i = 0; i < e.length; i++) {
			total.push(e[i].amount);
		}
		return total.filter((e) => e > 0).reduce((a, b) => a + Number(b), 0);
	};

	const negative = (e) => {
		let total = [];
		for (let i = 0; i < e.length; i++) {
			total.push(e[i].amount);
		}
		return total.filter((e) => e < 0).reduce((a, b) => a + Number(b), 0);
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
			<h1 className="homeFirstHeader">All Transactions</h1>

			<div className="headerFlex">
				<h1 className="totalAmount">
					Income: <span style={{ color: "green" }}>{income}</span>{" "}
				</h1>
				<h1 className="totalAmount">
					Total
					<span style={total >= 1000 ? { color: "purple" } : { color: "red" }}>
						: {total}
					</span>
				</h1>
				<h1 className="totalAmount">
					Spent: <span style={{ color: "red" }}>{spent}</span>{" "}
				</h1>
			</div>
			<Transactions />
		</div>
	);
}

export default Index;
