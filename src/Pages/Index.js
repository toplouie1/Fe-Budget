import React from "react";
import Transactions from "../Components/Transactions";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Index() {
	// // THE TOtAL NUMBER
	const [total, setTotal] = useState(0);

	useEffect(() => {
		axios
			.get(`${API}/transactions`)
			.then((res) => {
				setTotal(all(res.data));
			})
			.catch((err) => {
				throw err;
			});
	}, []);

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
				Bank Account Total
				<span style={total >= 1000 ? { color: "purple" } : { color: "red" }}>
					: {total}
				</span>
			</h1>
			<h1 className="homeFirstHeader">Index Page</h1>
			<Transactions />
		</div>
	);
}

export default Index;
