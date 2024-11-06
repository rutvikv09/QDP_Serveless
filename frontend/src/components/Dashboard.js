import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Dashboard() {
	const [name, setName] = useState("Guest");

	useEffect(() => {
		const token = localStorage.getItem("jwtToken");

		if (token) {
			try {
				const decoded = jwtDecode(token);
				setName(decoded["custom:fullname"] || "Guest");
			} catch (error) {
				console.error("Invalid token", error);
			}
		}
	}, []);

	return (
		<>
			<h1>Dashboard</h1>
			<h2>Welcome, {name}!</h2>
		</>
	);
}